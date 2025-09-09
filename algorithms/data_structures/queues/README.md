# Queues

é um estrutra de dados que segue o **FIFO (First In, First Out)**

> O primeiro elemento que entra é o primeiro a sair

a implementação padrao é feita atraves de Linked List, mantendo uma referencia do ponto inicial e do final.

para garantir que se eu precisar adicionar um novo elemento no final eu não precise percorrer o queue inteiro ( O(n) ), apenas fazer uma referencia do que era o ultimo elemento para o novo final da queue

assim garantimos que a remoção e a inserção de um elemento seja O(1)
