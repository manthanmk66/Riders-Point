

import java.time.LocalDate;
import java.time.LocalTime;

public class RiderRouteDetails {
	private int route_id;	
	private int status_id;
	private String start_point;
	private String end_point;
	private LocalDate date;
	private LocalTime startTime;
	private LocalTime endTme;
	private String description;
	public RiderRouteDetails() {
		super();
	}
	public RiderRouteDetails(int route_id, int status_id, String start_point, String end_point, LocalDate date,
			LocalTime startTime, LocalTime endTme, String description) {
		super();
		this.route_id = route_id;
		this.status_id = status_id;
		this.start_point = start_point;
		this.end_point = end_point;
		this.date = date;
		this.startTime = startTime;
		this.endTme = endTme;
		this.description = description;
	}
	public int getRoute_id() {
		return route_id;
	}
	public void setRoute_id(int route_id) {
		this.route_id = route_id;
	}
	public int getStatus_id() {
		return status_id;
	}
	public void setStatus_id(int status_id) {
		this.status_id = status_id;
	}
	public String getStart_point() {
		return start_point;
	}
	public void setStart_point(String start_point) {
		this.start_point = start_point;
	}
	public String getEnd_point() {
		return end_point;
	}
	public void setEnd_point(String end_point) {
		this.end_point = end_point;
	}
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	public LocalTime getStartTime() {
		return startTime;
	}
	public void setStartTime(LocalTime startTime) {
		this.startTime = startTime;
	}
	public LocalTime getEndTme() {
		return endTme;
	}
	public void setEndTme(LocalTime endTme) {
		this.endTme = endTme;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	@Override
	public String toString() {
		return "RiderRouteDetails [route_id=" + route_id + ", status_id=" + status_id + ", start_point=" + start_point
				+ ", end_point=" + end_point + ", date=" + date + ", startTime=" + startTime + ", endTme=" + endTme
				+ ", description=" + description + "]";
	}
	
	
}