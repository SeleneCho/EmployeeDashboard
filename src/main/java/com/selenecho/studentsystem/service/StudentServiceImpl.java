package com.selenecho.studentsystem.service;

import com.selenecho.studentsystem.model.Student;
import com.selenecho.studentsystem.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl implements StudentService{

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }

    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

   @Override
   public Student get(Integer id) {
        return  studentRepository.findById(id).get();
   }

   @Override
   public void delete(Integer id) {
     studentRepository.deleteById(id);
   }
}
