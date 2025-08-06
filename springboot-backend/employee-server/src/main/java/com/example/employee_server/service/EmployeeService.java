package com.example.employee_server.service;

import com.example.employee_server.model.Employee;
import com.example.employee_server.repository.EmployeeRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class EmployeeService {

    private final EmployeeRepository employeeRepository;

    public Employee postEmployee(Employee employee){
        return employeeRepository.save(employee);

    }



    public List<Employee> getEmployee() {

        return employeeRepository.findAll();
    }

    public void deleteEmployee(long id){
        if(!employeeRepository.existsById(id)){
            throw new EntityNotFoundException("Employee with ID "+id+" not found");

        }
        employeeRepository.deleteById(id);
    }

    public Employee getEmployeeById(long id){

        return employeeRepository.findById(id).orElse(null);
    }

    public Employee updateEmployee(long id,Employee employee){
        Optional<Employee> optionalEmployee=employeeRepository.findById(id);
        if(optionalEmployee.isPresent()){
            Employee existEmployee=optionalEmployee.get();
            existEmployee.setEmail(employee.getEmail());
            existEmployee.setName(employee.getName());
            existEmployee.setPhone(employee.getPhone());
            existEmployee.setDepartment(employee.getDepartment());
            return employeeRepository.save(existEmployee);
        }
        return null;
    }
}
