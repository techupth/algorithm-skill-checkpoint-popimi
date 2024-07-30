/*
What is the Big O notation for Function findStudentById . Explain your reason.
Answer: O(n) เพราะ linear search มีการเข้าถึงข้อมูลทีละ index ไล่ไปจนครบจำนวน data ใน array
แต่ข้อนี้จริง ๆ ก็ใช้ binary search ได้นะครับ เห็นไอดีเรียงมาแล้ว แต่โจทย์บังคับ linear 

*/

/* 
What is the Big O notation for Function findProductPrice. Explain your reason.
Answer: O(log n) เพราะ data ใน array ในส่วนของ name เรียงลำดับมาแล้ว 
เลยใช้ binary search เพื่อลดจำนวนของการลูปลงครึ่งนึงในทุก ๆ รอบลูป

*/

/* 
Which function is more efficient and why?
Answer: findProductPrice ที่ใช้ O(log n) ดีกว่า เพราะมีการลดจำนวนลูปลงทีละครึ่ง 
ต่างจาก findStudentById ที่ใช้ linear search ซึ่งจะลูปเข้าถึงทีละ index เพื่อเช็คค่า

*/
