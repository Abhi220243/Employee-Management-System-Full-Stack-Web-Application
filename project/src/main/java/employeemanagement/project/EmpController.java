package employeemanagement.project;

import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;




@RestController
@CrossOrigin(origins = "http://localhost:5173/")
public class EmpController {

    @Autowired
    EmpService empService;
    
    @GetMapping("employee")
    public List<Employee> getEmp() {
        return empService.getAll();
    }
    
    @PostMapping("employee")
    public String postEmp(@RequestBody Employee employee) {
        
        return empService.createEmp(employee);
    }

    @PutMapping("employee/{id}")
    public String putMethodName(@PathVariable Long id, @RequestBody Employee employee) {
        
        return empService.updateEmp(id, employee);
    }
    
    @DeleteMapping("employee/{id}")
    public boolean removeEmp(@PathVariable Long id){
        if(empService.deleteEmp(id))
            return true;

        return false;
    }
}