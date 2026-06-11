package employeemanagement.project;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public interface EmpService {

    String createEmp(Employee employee);
    List<Employee> getAll();
    String updateEmp(Long id,Employee employee);
    boolean deleteEmp(Long id);
    
}