package com.demo.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.Model.Suggestion_table;

public interface SuggestionDao  extends JpaRepository<Suggestion_table, Integer>{
	
}
