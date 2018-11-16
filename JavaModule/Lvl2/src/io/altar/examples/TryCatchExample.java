package io.altar.examples;

import java.util.Scanner;

public class TryCatchExample {
	static Scanner scanner = new Scanner (System.in);

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		getNumber();
	}
	
	public static void getNumber(){
		System.out.println("Give me your best: ");
		
		try {
			int value = scanner.nextInt();
			System.out.println("Number: "+value);
			getNumber();
			clearScanner();
		} catch (Exception e) {
			System.out.println("Erro: "+e);
			clearScanner();
			getNumber();
		}
	}
	
	public static void clearScanner(){
		scanner.nextLine();
		
	}

}
