# Vetores em Java - Acesso a Elementos

Este é um exemplo básico de como declarar e acessar elementos de um vetor (array) em Java.

## 🧾 Descrição

O programa declara um vetor de `String` chamado `frutas`, contendo quatro elementos. Em seguida, imprime no console o terceiro item do vetor (índice 2), que é **"melância"**.

## 💡 Objetivo

Este projeto serve como introdução ao uso de vetores em Java. Ele mostra como:

- Declarar e inicializar um array;
- Acessar um elemento específico usando seu índice.

## 📌 Código

```java
public class Vetores {
    public static void main(String[] args) {
        String[] frutas = {"maçã", "banana", "melância", "uva"};
        
        System.out.println(frutas[2]); // Saída: melância
    }
}
