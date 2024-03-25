package servlets;
import dao.AppointmentDAO;
import db.DbConn;
import model.Appointment;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
@WebServlet("/editAppointment")
public class EditAppointment extends HttpServlet {
	  @Override
	    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

	        int userId = Integer.parseInt(req.getParameter("userid"));
	        String fullname = req.getParameter("fullname");
	        String gender = req.getParameter("gender");
	        String age = req.getParameter("age");
	        String appoint_date = req.getParameter("appoint_date");
	        String email = req.getParameter("email");
	        String phno = req.getParameter("phno");
	        String diseases = req.getParameter("diseases");
	        int doctor_id = Integer.parseInt(req.getParameter("doct"));
	        String address = req.getParameter("address");
	        int id = Integer.parseInt(req.getParameter("id"));


	        Appointment ap = new Appointment(id,userId, fullname, gender, age, appoint_date, email, phno, diseases, doctor_id,
	                address, "Pending");

	        AppointmentDAO dao = new AppointmentDAO(DbConn.getConn());
	        HttpSession session = req.getSession();

	        if (dao.editAppointment(ap)) {
	            session.setAttribute("succMsg", "Appointment Edit Sucessfully");
	            resp.sendRedirect("user_appointment.jsp");
	        } else {
	            session.setAttribute("errorMsg", "Something wrong on server");
	            resp.sendRedirect("user_appointment.jsp");
	        }

	    }

}
