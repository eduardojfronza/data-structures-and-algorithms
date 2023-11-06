#include  <stdio.h>

int main() {
    double raio, area;
    // o lf serve para especificar o tipo de formatação que a função deve aplicar ao valor será imprimido
    scanf("%lf",&raio);

    area = 3.14159 * raio * raio;  
    printf("A=%.4f\n", area);

    return 0;
}