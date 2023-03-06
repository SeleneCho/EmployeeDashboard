package com.selenecho.studentsystem.service;

import com.selenecho.studentsystem.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
    public Student get(Integer id);
    public void delete(Integer id);
}
