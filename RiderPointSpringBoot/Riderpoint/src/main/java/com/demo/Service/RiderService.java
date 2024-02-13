package com.demo.Service;

import java.util.List;

import com.demo.Model.RpDetails;

public interface RiderService {

	List<RpDetails> getAll();

	List<RpDetails> getbyroute(String start, String end);

}
