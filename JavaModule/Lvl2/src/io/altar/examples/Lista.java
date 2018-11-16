package io.altar.examples;

import java.util.List;
import java.util.ArrayList;
import java.util.Iterator;

public class Lista {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		List<String> listStrings = new ArrayList<>();
		
		Iterator<String> iterator= listStrings.iterator();
		
		while(iterator.hasNext()){
			String element = iterator.next();
			System.out.println(element);
		}
		
		listStrings.add("Ze Manel");
		listStrings.add("Ze Carlos");
		System.out.println(listStrings);
	}

}
