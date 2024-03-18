package demo.src.main.java.com.example;

import java.text.FieldPosition;
import java.text.Format;
import java.text.ParsePosition;

public class Rectangle extends Format {
    private int largeur ;
    private int longueur ;
    public Rectangle(int x, int y) {
    this.largeur = x ;
    this.longueur = y ;
    }
    public int getLargeur() {
    return this.largeur ;
    }
    public int getLongueur() {
    return this.longueur ;
    }
    public int surface() {
    return this.longueur * this.largeur ;
    }
    public void affiche() {
    System.out.println("rectangle " + longueur + "x" + largeur);
    }
    @Override
    public StringBuffer format(Object obj, StringBuffer toAppendTo, FieldPosition pos) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'format'");
    }
    @Override
    public Object parseObject(String source, ParsePosition pos) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'parseObject'");
    }
    }
