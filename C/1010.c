#include <stdio.h>

int main() {
    int id_1, numero_1, id_2, numero_2;
    float preco_1, preco_2, total;

    scanf("%d %d %f", &id_1, &numero_1, &preco_1);
    scanf("%d %d %f", &id_2, &numero_2, &preco_2);

    total = (numero_1*preco_1)+(numero_2*preco_2);

    printf("VALOR A PAGAR: R$ %.2f\n", total);
    return 0;
}