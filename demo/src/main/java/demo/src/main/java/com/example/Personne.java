package demo.src.main.java.com.example;

class Personne
{

private Object prenom;
private int age;

// amélioration de toString()
public String toString()
{
StringBuilder retour = new StringBuilder();
if (prenom != null) retour.append(prenom).append(", ");
if (age>0) retour.append("age = ").append(age);
return retour.toString();
}
}
