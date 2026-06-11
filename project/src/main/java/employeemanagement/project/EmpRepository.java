package employeemanagement.project;

import org.springframework.data.jpa.repository.JpaRepository;

public interface EmpRepository extends JpaRepository<EmpEntity,Long>{
    
}