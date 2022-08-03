export interface Lecturers {
  id?: number;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  photo: string;
  start_date: Date;
}

export interface Courses {
  id: string;
  name: string;
  description: string;
  price: number;
  date_start: Date;
  lessons_quantity: number;
  category: string;
  lecturer: string;
}

export interface Course {
  id: string;
  name: string;
  description: string;
  price: number;
  date_start: Date;
  lessons_quantity: number;
  category: string;
  lecturer: string;
}

export class Lecturer implements Lecturers {
  id?: number | undefined;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  photo: string;
  start_date: Date = new Date();

  constructor(str: string) {
    let obj = JSON.parse(str);
    this.id = obj.id;
    this.first_name = obj.first_name;
    this.last_name = obj.last_name;
    this.phone = obj.phone;
    this.email = obj.email;
    this.photo = obj.photo;
    this.start_date = obj.start_date;
  }
}

export interface CoursesSort {
  column: sortColumn;
  dirAsc: boolean;
  filter: string;
}

export type sortColumn = 'name' | 'price' | '';

export interface FilePath {
  name: string;
}

