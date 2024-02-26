<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class RutValidationRule implements Rule
{
    public function passes($attribute, $value)
    {
        $rut = strtoupper(str_replace(['.'], '', $value));

        // Verificar el formato del RUT
        if (!preg_match('/^[0-9]+-[0-9K]$/', $rut)) {
            return false;
        }

        // Separar cuerpo y dígito verificador
        list($cuerpo, $dv) = explode('-', $rut);

        // Calcular el dígito verificador esperado
        $suma = 0;
        $multiplo = 2;

        for ($i = strlen($cuerpo) - 1; $i >= 0; $i--) {
            $suma += intval($cuerpo[$i]) * $multiplo;
            if ($multiplo < 7) {
                $multiplo += 1;
            } else {
                $multiplo = 2;
            }
        }

        $dvEsperado = 11 - ($suma % 11);

        // Validar el dígito verificador
        if ($dvEsperado == 11) {
            $dvEsperado = 0;
        } elseif ($dvEsperado == 10) {
            $dvEsperado = 'K';
        }

        return $dv == $dvEsperado;
    }

    public function message()
    {
        return 'El campo :attribute no es un RUT válido.';
    }
}
