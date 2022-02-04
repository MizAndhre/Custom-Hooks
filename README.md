# Notes / Notas

- This repository contains various customHooks to help me and others. They are reusable.

- Este repositorio contiene varios customHooks para ayudarme, a mi y a quien le sirva. Son reutilizables.



## Table of contents / Contenido

- [useCounter](#useCounter)
- [useFetch](#useFetch)
- [useForm](#useForm)

## useCounter

Ejemplo de uso:
```
    const { counter, increment, decrement, reset } = useCounter(10);
```

useCounter() // recibe un valor por defecto
## useFetch

Ejemplo:
```
    const url = 'endpoint de una api';
    const { data: null, loading: true, error: null } = useFetch(url);

```
## useForm

Ejemplo:

```
    const initialForm = {
        name: '',
        age: 0,
        email: ''
    };
    
    const [ formValues, handleInputChange, reset ] = useForm( initialForm );

```

