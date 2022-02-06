import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe("Pruebas en Hook useForm", () => {
   const initialForm = {
      name: "Andhre",
      email: "mail@mail.com",
   };

   // ! =========================================>
   test("should regresar un formulario por defecto", () => {
      //   values deben ser igual al initialForm -- toEqual
      // el segundo y tercer argumento debe ser funciones

      const { result } = renderHook(() => useForm(initialForm));
      const [, handleInputChange, reset] = result.current;

      //   console.log(result.current.at(0));

      expect(result.current.at(0)).toEqual(initialForm);
      expect(typeof handleInputChange).toBe("function");
      expect(typeof reset).toBe("function");
   });

   // ! =========================================>
   test("should cambiar el valor del formulario", () => {
      //   llamar el handleInputChange, recibe un evento
      // => el objeto debe tener target y value
      // cambiar el name

      const { result } = renderHook(() => useForm(initialForm));
      const [, handleInputChange] = result.current;

      //    simular un evento, dentro tiene un objeto con un target
      //  dentro del target, hay un objeto con un name y un value
      const evento = {
         target: {
            name: "name",
            value: "Melissa",
         },
      };

      act(() => {
         handleInputChange(evento);

         // todo: Otra forma =============>
         //  handleInputChange({
         //      target: {
         //          name: 'name',
         //          value: 'Miranda'
         //      }
         //  });
      });

      const [formValues] = result.current;

      //   console.log(formValues);
      expect(formValues).toEqual({ ...initialForm, name: "Melissa" });
      expect(formValues.name).toBe(evento.target.value);
   });

   // ! =========================================>
   test("should reestablecer el formulario con reset", () => {
      //   igual al initialForm

      const { result } = renderHook(() => useForm(initialForm));
      const [, handleInputChange, reset] = result.current;

      const evento = {
         target: {
            name: "name",
            value: "Melissa",
         },
      };

      act(() => {
         handleInputChange(evento);
         reset();
      });

      const [formValues] = result.current;
      expect(formValues).toEqual(initialForm);
   });
});
