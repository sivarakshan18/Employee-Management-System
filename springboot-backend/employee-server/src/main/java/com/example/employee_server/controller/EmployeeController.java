package com.example.employee_server.controller;


import com.example.employee_server.model.Employee;
import com.example.employee_server.service.EmployeeService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin("http://localhost:5173")
public class EmployeeController {
    private final EmployeeService employeeService;


    @GetMapping("/employees")
    public List<Employee> getEmployee(){

        return employeeService.getEmployee();
    }
    @PostMapping("/employee")
    public Employee postEmployee(@RequestBody Employee employee){

        return employeeService.postEmployee(employee);
    }

    @DeleteMapping("/employee/{id}")
    public ResponseEntity<?> deleteEmployee(@PathVariable long id){
        try {
            employeeService.deleteEmployee(id);
            return new ResponseEntity<>("Employee with ID" + id + "deleted successfully", HttpStatus.OK);
        }
        catch (EntityNotFoundException e){
            return new ResponseEntity<>(e.getMessage(),HttpStatus.NOT_FOUND);
        }
          }


    @GetMapping("/employee/{id}")
    public ResponseEntity<?> getEmployeeById(@PathVariable long id){
        Employee employee=employeeService.getEmployeeById(id);
        if(employee==null)return ResponseEntity.notFound().build();
        return ResponseEntity.ok(employee);
          }

        @PatchMapping("/employee/{id}")
        public ResponseEntity updateEmploy(@PathVariable long id,@RequestBody Employee employee){
        Employee updateEmployee=employeeService.updateEmployee(id, employee);
        if(updateEmployee == null) return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        return ResponseEntity.ok(updateEmployee);
          }
}
