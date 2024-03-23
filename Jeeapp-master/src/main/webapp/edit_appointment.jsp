<%@ page import="dao.DoctorDao" %>
<%@ page import="db.DbConn" %>
<%@ page import="model.Doctor" %>
<%@ page import="java.util.List" %>
<%@ page import="model.Appointment" %>
<%@ page import="dao.AppointmentDAO" %>




<%
  response.setHeader("Cache-Control", "no-cache");
  response.setHeader("Cache-Control", "no-store");
  response.setHeader("Pragma", "no-cache");
  response.setDateHeader("Expires", 0);
%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@page isELIgnored="false"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
         pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<head>
  <meta charset="ISO-8859-1">
  <title>User Appointment</title>
  <%@include file="comp/allcss.jsp"%>
  <style type="text/css">
    .paint-card {
      box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.3);
    }

    .backImg {
      background: linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)),
      url("img/d4y.jpg");
      height: 20vh;
      width: 100%;
      background-size: cover;
      background-repeat: no-repeat;
    }
  </style>
</head>
<body>
<%@include file="comp/navbar.jsp"%>

<div class="container-fulid backImg p-5">
  <p class="text-center fs-2 text-white"></p>
</div>
<div class="container p-3">
  <div class="row">
    <div class="col-md-6 p-5">
      <img alt="" src="img/d4y.jpg">
    </div>

    <div class="col-md-6">
      <div class="card paint-card">
        <div class="card-body">
          <p class="text-center fs-3">User Appointment</p>
          <c:if test="${not empty errorMsg}">
            <p class="fs-4 text-center text-danger">${errorMsg}</p>
            <c:remove var="errorMsg" scope="session" />
          </c:if>
          <c:if test="${not empty succMsg}">
            <p class=" fs-4 text-center text-primary">${succMsg}</p>
            <c:remove var="succMsg" scope="session" />
          </c:if>
          <%
                     int id=Integer.parseInt(request.getParameter("id"));
                    AppointmentDAO daoo=new AppointmentDAO(DbConn.getConn());
                    Appointment ap=daoo.getAppointmentById(id);

         %>
         
          <form class="row g-3" action="edit_appointment.jsp" method="post">

            <input type="hidden" name="userid" value="${userObj.id }">

            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">Full Name</label> <input
                    required type="text" class="form-control" name="fullname"  value = "<%=ap.getFullName()%>">
            </div>

            <div class="col-md-6">
              <label>Gender</label> <select class="form-control" name="gender" 
                                            required value= "<%=ap.getGender() %>"> 
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            </div>

            <div class="col-md-6">
              <%--@declare id="inputemail4"--%><label for="inputEmail4" class="form-label">Age</label> <input
                    required type="number" class="form-control" name="age" value =" <%=ap.getAge() %>">
            </div>

            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">Appointment
                Date</label> <input type="date" class="form-control" required value="<%=ap.getAppoinDate() %>"
                                    name="appoint_date">
            </div>

            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">Email</label> <input
                    required type="email" class="form-control" name="email" value= "<%= ap.getEmail() %>">
            </div>

            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">Phone No</label> <input
                    maxlength="10" required type="number" class="form-control" value="<%= ap.getPhNo()%>"
                    name="phno">
            </div>


            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">Diseases</label> <input
                    required type="text" class="form-control" name="diseases" value="<%= ap.getDiseases() %>">
            </div>

            <div class="col-md-6">
              <%--@declare id="inputpassword4"--%><label for="inputPassword4" class="form-label">Doctor</label> <select
                    required class="form-control" name="doct">
              <option value="<%= ap.getDoctorId()  %>">--select--</option>

              <%
                DoctorDao dao = new DoctorDao(DbConn.getConn());
                List<Doctor> list = dao.getAllDoctor();
                for (Doctor d : list) {
              %>
              <option value="<%=d.getId()%>"><%=d.getFullName()%> (<%=d.getSpecialist()%>)
              </option>
              <%
                }
              %>




            </select>
            </div>

            <div class="col-md-12">
              <label>Full Address</label>
              <textarea required name="address" class="form-control" rows="3"
                        cols="" ></textarea>
            </div>

            <c:if test="${empty userObj }">
              <a href="user_login.jsp" class="col-md-6 offset-md-3 btn btn-primary">Submit</a>
            </c:if>

            <c:if test="${not empty userObj }">
              <button class="col-md-6 offset-md-3 btn btn-primary">Submit</button>
            </c:if>
          </form>
        </div>
      </div>
    </div>
  </div>

</div>
<%@include file="comp/footer.jsp"%>

</body>
</html>
