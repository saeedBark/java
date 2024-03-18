const sql = require("./db.js");

class Personne {
  constructor(person) {
    this.nom = person.nom;
    this.email = person.email;
    this.nni = person.nni;
    this.phone = person.phone;
    this.salary = person.salary;
    this.department = person.department;
    this.nbPres = person.nbPres;
    this.nbAbs = person.nbAbs;
  }

  static create(newPersonne, result) {
    sql.query("INSERT INTO personne SET ?", newPersonne, (err, res) => {
      if (err) {
        console.log("error: ", err);
        return null;
      }

      console.log("created person: ", { id: res.insertId, ...newPersonne });
     return  { id: res.insertId, ...newPersonne }
    });
  }

  static findById(id, result) {
    sql.query(`SELECT * FROM personne WHERE id = ${id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
       return null
      }

      if (res.length) {
        console.log("found person: ", res[0]);
       return res[0]
      }

      // not found Personne with the id
     return null
    });
  }

  static async getAll(nom) {
    let query = "SELECT * FROM personne";
    if (nom) {
      query += ` WHERE nom LIKE '%${nom}%'`;
    }

    return new Promise((resolve, reject) => {
      sql.query(query, (err, res) => {
        if (err) {
          console.log("error: ", err);
          reject(err);
          return;
        }

        console.log("personne: ", res);
        resolve(res);
      });
    });
  }

  // static getUsersByName(nom, result) {
  //   sql.query(
  //     "SELECT * FROM personnes WHERE nom LIKE ?",
  //     [`%${nom}%`],
  //     (err, res) => {
  //       if (err) {
  //         console.log("Error: ", err);
  //        return null
  //         return;
  //       }

  //       return res
  //     }
  //   );
  // }

  static updateById(id, person, result) {
    sql.query(
      "UPDATE personne SET nom = ?, email = ?, nni = ?, phone = ?, salary = ?, department = ?, nbPres = ?, nbAbs = ? WHERE id = ?",
      [
        person.nom,
        person.email,
        person.nni,
        person.phone,
        person.salary,
        person.department,
        person.nbPres,
        person.nbAbs,
        id,
      ],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          return null
          return;
        }

        if (res.affectedRows == 0) {
          // not found Personne with the id
          return null
        }

        console.log("updated person: ", { id: id, ...person });
       return  { id, ...person }
      }
    );
  }

  static remove(id, result) {
    sql.query("DELETE FROM personne WHERE id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        return null
        return;
      }

      if (res.affectedRows == 0) {
        // not found Personne with the id
        return null
      }

      console.log("deleted person with id: ", id);
      return res
    });
  }

  static removeAll(result) {
    sql.query("DELETE FROM personne", (err, res) => {
      if (err) {
        console.log("error: ", err);
        return null
        return;
      }

      console.log(`deleted ${res.affectedRows} personnes`);
      return res
    });
  }

  static getTotalCount(result) {
    sql.query("SELECT COUNT(*) AS totalUsers FROM personne", (err, res) => {
      if (err) {
        console.log("Error: ", err);
       return null
        return;
      }

      return res[0].totalUsers;
    });
  }

  static getTotalSalaries(result) {
    sql.query(
      "SELECT SUM(salary) AS totalSalaries FROM personne",
      (err, res) => {
        if (err) {
          console.log("Error: ", err);
         return null
          return;
        }

        return res[0].totalSalaries
      }
    );
  }

  static getAverageSalary(result) {
    sql.query(
      "SELECT AVG(salary) AS averageSalary FROM personne",
      (err, res) => {
        if (err) {
          console.log("Error: ", err);
         return null
          return;
        }

        return res[0].averageSalary
      }
    );
  }

  static getAbsenteismRate(result) {
    sql.query(
      "SELECT SUM(nbAbs) AS totalAbsences, SUM(nbPres) AS totalPresences FROM personne",
      (err, res) => {
        if (err) {
          console.log("Error: ", err);
         return null
          return;
        }

        const totalAbsences = res[0].totalAbsences;
        const totalPresences = res[0].totalPresences;
        const total = totalAbsences + totalPresences;
        const absenteismRate = (totalAbsences / total) * 100;
       return  absenteismRate;
      }
    );
  }
}

module.exports = Personne;
