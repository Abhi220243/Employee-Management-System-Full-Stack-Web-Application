package employeemanagement.project;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmpServiceImp implements EmpService{

    @Autowired
    EmpRepository empRepository;

    

    @Override
    public String createEmp(Employee employee){
        EmpEntity emp = new EmpEntity();
        BeanUtils.copyProperties(employee, emp);
        empRepository.save(emp);

        return "saved sucessfully";
    }

    @Override
    public List<Employee> getAll() {
        List<EmpEntity> empList = empRepository.findAll();
        List<Employee> employees = new ArrayList<>();

        for (EmpEntity empEntity : empList) {
            Employee emp = new Employee();

            emp.setId(empEntity.getId());
            emp.setName(empEntity.getName());
            emp.setPhone(empEntity.getPhone());
            emp.setEmail(empEntity.getEmail());

            employees.add(emp);
        }

        return employees;
    }

    @Override
    public String updateEmp(Long id, Employee employee) {
        EmpEntity emp = empRepository.findById(id).get();

        emp.setName(employee.getName());
        emp.setPhone(employee.getPhone());
        emp.setEmail(employee.getEmail());

        empRepository.save(emp);

        return "update sucessfully";
    }

    @Override
    public boolean deleteEmp(Long id) {
        EmpEntity emp = empRepository.findById(id).get();
        empRepository.delete(emp);

        return true;
    }
    
}
