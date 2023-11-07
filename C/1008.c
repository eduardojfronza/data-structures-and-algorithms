#include <stdio.h>

int main() {
    int NUMBER, HOURS;
    float VALUEPERHOUR, SALARY;

    scanf("%d %d %f",&NUMBER,&HOURS, &VALUEPERHOUR);
    
    SALARY = HOURS*VALUEPERHOUR;

    printf("NUMBER = %d\n", NUMBER);
    printf("SALARY = U$ %.2f\n", SALARY);
    return 0;
}