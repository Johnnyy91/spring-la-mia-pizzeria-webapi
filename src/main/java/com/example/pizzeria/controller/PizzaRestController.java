package com.example.pizzeria.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.pizzeria.model.Pizza;
import com.example.pizzeria.repository.PizzaRepository;


@RestController
@CrossOrigin
@RequestMapping("/api/pizze")
public class PizzaRestController {
	
	@Autowired
	PizzaRepository pizzaRepository;
	
	@GetMapping()
	public List<Pizza> index(){
		return pizzaRepository.findAll();
	}
	
	
	@GetMapping("/{id}")
	public ResponseEntity<Pizza> show(@PathVariable("id") Integer id){
		Optional<Pizza> pizza= pizzaRepository.findById(id); 
		if(pizza.isEmpty()) {
			return new ResponseEntity<Pizza>(HttpStatus.NOT_FOUND);
		}else {
			return new ResponseEntity<Pizza>(pizza.get(),HttpStatus.OK);
			
		}
	}
	


     
   
}

	