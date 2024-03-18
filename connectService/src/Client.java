import java.io.*;
import java.net.*;

public class Client {
    public static void main(String [] args) {

        try {             
                  Socket s = new Socket("localhost", 9000);

            InputStream is = s.getInputStream();
            BufferedReader bf = new BufferedReader(new InputStreamReader(is));

            String st = bf.readLine();
            System.out.println("Le serveur m'a dit "+st);

            s.close();
        } catch(Exception e) { 
            System.err.println(e);
        }                     


    }
}
