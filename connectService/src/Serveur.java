import java.io.*;
import java.net.*;

public class Serveur {
    public static void main(String[] args) {
        try {
            ServerSocket s = new ServerSocket(9000);
            System.out.println("Serveur en attente");

            while (true) {
                Socket service = s.accept();
                System.out.println("Un client vient d'arriver");
                Service leService = new Service(service);
                leService.start();
            }
        } catch (Exception e) {
            System.err.println(e);
        }
    }
}
