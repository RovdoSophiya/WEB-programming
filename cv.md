# My CV

**Sophiya Rouda**  
student of group PIR-221

<image src="D:/images/photo.jpg" alt="Photo">

**Contacts:**  
tepephone: +375293174309  
gmail: [rovdosophiya@gmail.com](mailto:rovdosophiya@gmail.com)  
email: [ms.sanson@mail.ru](https://e.mail.ru/inbox/?app_id_mytracker=58519&authid=lslfgkgt.0gs&back=1%2C1&dwhsplit=s10273.b1ss12743s&from=login%2Cnavi%2Cnavi&x-login-auth=1&afterReload=1)

---

**My goals:**

- improve english
- learn programming
- finish university with red diploma

---

**Education:**  
 Place of studying: Belarusian-Russian University  
 Years of studying: 2020-n.d  
 Degree name: Balalavr

---

**Advantages:**

- assudity
- responsibility
- stress resistance

---

**My Projects:**

- [PNPK](https://github.com/RovdoSophiya/Lab_rab8_PNPK)
- [TestingProgram](https://github.com/RovdoSophiya/TestingProgram)

---

**Experience of work:**  
none

---

**English language:**  
B2 level, finish courses in English School

---

**Example of code:**

```csharp
static string PathEnter()
{
    Console.WriteLine("Введите filePath");
    string filePath = Console.ReadLine();
    Console.Clear();
    return filePath;
}

static List<String> QuastionGenerator(string data, int count, List<String> anwserToList)
{
    string Quastion = data;
    string[] Qua = Quastion.Split('%', '#');
    for (int i = 1; i < Qua.Length; i++)
    {
        Console.WriteLine(Qua[i]);
        string anwser = Console.ReadLine();
        anwserToList.Add($"{count}, {anwser}");
        Console.Clear();
    }
    return anwserToList;
}
```
