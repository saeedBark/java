package demo.src;

import demo.src.main.java.com.example.Rectangle;

public class Carre extends Rectangle {
    public Carre(int cote) {
    super(cote, cote);
    }
    public void affiche() {
    System.out.println("carré " + this.getLongueur());
    }
    }
