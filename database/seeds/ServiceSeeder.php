<?php

use Illuminate\Database\Seeder;
use App\Service;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /*** categoría DEPILACIÓN */
        Service::create([
            'category_id' => 1,
            'name' => 'PIERNAS COMPLETAS',
            'score_exchange' => 800,
            'score_accumulated' => 8,
            'price' => 8000,
        ]);

        Service::create([
            'category_id' => 1,
            'name' => 'MEDIA PIERNA',
            'score_exchange' => 450,
            'score_accumulated' => 5,
            'price' => 4500,
        ]);

        Service::create([
            'category_id' => 1,
            'name' => 'BRAZO COMPLETO',
            'score_exchange' => 400,
            'score_accumulated' => 4,
            'price' => 4000,
        ]);

        Service::create([
            'category_id' => 1,
            'name' => 'MEDIO BRAZO',
            'score_exchange' => 400,
            'score_accumulated' => 3,
            'price' => 2500,
        ]);

        Service::create([
            'category_id' => 1,
            'name' => 'REBAJE CORTO',
            'score_exchange' => 1000,
            'score_accumulated' => 3,
            'price' => 3000,
        ]);

        Service::create([
            'category_id' => 1,
            'name' => 'REBAJE LARGO',
            'score_exchange' => 1500,
            'score_accumulated' => 5,
            'price' => 5000,
        ]);

        Service::create([
            'category_id' => 1,
            'name' => 'REBAJE BRAZILIAN FULL',
            'score_exchange' => 1500,
            'score_accumulated' => 6,
            'price' => 6000,
        ]);

        Service::create([
            'category_id' => 1,
            'name' => 'REBAJE BRAZILIAN FULL EXTRA',
            'score_exchange' => 1500,
            'score_accumulated' => 8,
            'price' => 8000,
        ]);

        Service::create([
            'category_id' => 1,
            'name' => 'AXILAS',
            'score_exchange' => 1500,
            'score_accumulated' => 3,
            'price' => 2500,
        ]);

        Service::create([
            'category_id' => 1,
            'name' => 'ROSTRO',
            'score_exchange' => 1500,
            'score_accumulated' => 5,
            'price' => 5000,
        ]);

        Service::create([
            'category_id' => 1,
            'name' => 'CEJAS',
            'score_exchange' => 1500,
            'score_accumulated' => 4,
            'price' => 4000,
        ]);

        Service::create([
            'category_id' => 1,
            'name' => 'BOZO',
            'score_exchange' => 1500,
            'score_accumulated' => 1,
            'price' => 1000,
        ]);

        Service::create([
            'category_id' => 1,
            'name' => 'PATILLAS',
            'score_exchange' => 1500,
            'score_accumulated' => 5,
            'price' => 5000,
        ]);

        Service::create([
            'category_id' => 1,
            'name' => 'DORSAL',
            'score_exchange' => 1500,
            'score_accumulated' => 6,
            'price' => 6000,
        ]);

        Service::create([
            'category_id' => 1,
            'name' => 'ABDOMEN',
            'score_exchange' => 1500,
            'score_accumulated' => 6,
            'price' => 6000,
        ]);

        Service::create([
            'category_id' => 1,
            'name' => 'GLUTEOS',
            'score_exchange' => 1500,
            'score_accumulated' => 4,
            'price' => 4000,
        ]);

        Service::create([
            'category_id' => 1,
            'name' => 'LUMBAR',
            'score_exchange' => 1500,
            'score_accumulated' => 3,
            'price' => 3000,
        ]);

        /*** categoría FOTODEPILACIÓN (I.P.L) */
        Service::create([
            'category_id' => 2,
            'name' => 'BOZO',
            'score_exchange' => 5000,
            'score_accumulated' => 5,
            'price' => 5000,
        ]);

        Service::create([
            'category_id' => 2,
            'name' => 'MENTON / PATILLAS',
            'score_exchange' => 10000,
            'score_accumulated' => 10,
            'price' => 10000,
        ]);

        Service::create([
            'category_id' => 2,
            'name' => 'CUELLO ANTERIOR / POSTERIOR',
            'score_exchange' => 15000,
            'score_accumulated' => 15,
            'price' => 15000,
        ]);

        Service::create([
            'category_id' => 2,
            'name' => 'FACIAL COMPLETO',
            'score_exchange' => 25000,
            'score_accumulated' => 25,
            'price' => 25000,
        ]);

        Service::create([
            'category_id' => 2,
            'name' => 'AXILAS',
            'score_exchange' => 15000,
            'score_accumulated' => 15,
            'price' => 15000,
        ]);

        Service::create([
            'category_id' => 2,
            'name' => 'PECHO',
            'score_exchange' => 2000,
            'score_accumulated' => 20,
            'price' => 20000,
        ]);

        Service::create([
            'category_id' => 2,
            'name' => 'ABDOMEN',
            'score_exchange' => 250,
            'score_accumulated' => 25,
            'price' => 25000,
        ]);

        Service::create([
            'category_id' => 2,
            'name' => 'DORSAL',
            'score_exchange' => 300,
            'score_accumulated' => 30,
            'price' => 30000,
        ]);

        Service::create([
            'category_id' => 2,
            'name' => 'LUMBAR',
            'score_exchange' => 200,
            'score_accumulated' => 20,
            'price' => 20000,
        ]);

        Service::create([
            'category_id' => 2,
            'name' => 'GLUTEOS',
            'score_exchange' => 250,
            'score_accumulated' => 25,
            'price' => 25000,
        ]);

        Service::create([
            'category_id' => 2,
            'name' => 'BRAZOS COMPLETOS',
            'score_exchange' => 400,
            'score_accumulated' => 40,
            'price' => 40000,
        ]);

        Service::create([
            'category_id' => 2,
            'name' => 'MEDIOS BRAZOS',
            'score_exchange' => 250,
            'score_accumulated' => 25,
            'price' => 25000,
        ]);

        Service::create([
            'category_id' => 2,
            'name' => 'REBAJE',
            'score_exchange' => 200,
            'score_accumulated' => 20,
            'price' => 20000,
        ]);

        Service::create([
            'category_id' => 2,
            'name' => 'REBAJE FULL',
            'score_exchange' => 250,
            'score_accumulated' => 25,
            'price' => 25000,
        ]);

        Service::create([
            'category_id' => 2,
            'name' => 'PIERNAS COMPLETAS',
            'score_exchange' => 500,
            'score_accumulated' => 50,
            'price' => 50000,
        ]);

        Service::create([
            'category_id' => 2,
            'name' => 'MEDIAS PIERNAS',
            'score_exchange' => 350,
            'score_accumulated' => 35,
            'price' => 35000,
        ]);

        Service::create([
            'category_id' => 2,
            'name' => 'MANOS / PIES',
            'score_exchange' => 150,
            'score_accumulated' => 15,
            'price' => 15000,
        ]);

        Service::create([
            'category_id' => 2,
            'name' => 'TRATAMIENTO ACNE',
            'score_exchange' => 100,
            'score_accumulated' => 10,
            'price' => 10000,
        ]);

        /** CATEGORIA DEPILACION ROLL-ON */

        Service::create([
            'category_id' => 3,
            'name' => 'PIERNAS COMPLETAS',
            'score_exchange' => 130,
            'score_accumulated' => 13,
            'price' => 13000,
        ]);

        Service::create([
            'category_id' => 3,
            'name' => 'MEDIA PIERNA',
            'score_exchange' => 750,
            'score_accumulated' => 8,
            'price' => 7500,
        ]);

        Service::create([
            'category_id' => 3,
            'name' => 'BRAZO COMPLETO',
            'score_exchange' => 500,
            'score_accumulated' => 5,
            'price' => 5000,
        ]);

        Service::create([
            'category_id' => 3,
            'name' => 'MEDIO BRAZO',
            'score_exchange' => 350,
            'score_accumulated' => 4,
            'price' => 3500,
        ]);

        Service::create([
            'category_id' => 3,
            'name' => 'AXILAS',
            'score_exchange' => 350,
            'score_accumulated' => 4,
            'price' => 3500,
        ]);

        Service::create([
            'category_id' => 3,
            'name' => 'REBAJE CORTO',
            'score_exchange' => 400,
            'score_accumulated' => 4,
            'price' => 4000,
        ]);

        Service::create([
            'category_id' => 3,
            'name' => 'ABDOMEN',
            'score_exchange' => 800,
            'score_accumulated' => 8,
            'price' => 8000,
        ]);

        Service::create([
            'category_id' => 3,
            'name' => 'DORSAL',
            'score_exchange' => 800,
            'score_accumulated' => 8,
            'price' => 8000,
        ]);

        Service::create([
            'category_id' => 3,
            'name' => 'LUMBAR',
            'score_exchange' => 400,
            'score_accumulated' => 4,
            'price' => 4000,
        ]);

        Service::create([
            'category_id' => 3,
            'name' => 'GLUTEOS',
            'score_exchange' => 500,
            'score_accumulated' => 5,
            'price' => 5000,
        ]);

        /** CATEGORIA MANICURE & PEDICURE */

        Service::create([
            'category_id' => 4,
            'name' => 'MANICURE TRADICIONAL',
            'score_exchange' => 640,
            'score_accumulated' => 6,
            'price' => 6400,
        ]);

        Service::create([
            'category_id' => 4,
            'name' => 'MANICURE FRENCH',
            'score_exchange' => 790,
            'score_accumulated' => 8,
            'price' => 7900,
        ]);

        Service::create([
            'category_id' => 4,
            'name' => 'MANICURE DEGRADES O GLITER',
            'score_exchange' => 100,
            'score_accumulated' => 10,
            'price' => 10000,
        ]);

        Service::create([
            'category_id' => 4,
            'name' => 'ENSALMADO PERMANENTE',
            'score_exchange' => 150,
            'score_accumulated' => 15,
            'price' => 15000,
        ]);

        Service::create([
            'category_id' => 4,
            'name' => 'UÑAS ACRILICAS O GEL',
            'score_exchange' => 300,
            'score_accumulated' => 30,
            'price' => 30000,
        ]);

        Service::create([
            'category_id' => 4,
            'name' => 'PARAFINOTERAPIA',
            'score_exchange' => 120,
            'score_accumulated' => 12,
            'price' => 12000,
        ]);

        Service::create([
            'category_id' => 4,
            'name' => 'ANTI AGE MANOS',
            'score_exchange' =>150,
            'score_accumulated' => 15,
            'price' => 15000,
        ]);

        Service::create([
            'category_id' => 4,
            'name' => 'PEDICURE',
            'score_exchange' => 120,
            'score_accumulated' => 12,
            'price' => 12000,
        ]);

        /*** CATEGORIA DE COSMOTOLOGIA */

        Service::create([
            'category_id' => 5,
            'name' => 'ONDULACIÓN DE PESTAÑAS',
            'score_exchange' => 125,
            'score_accumulated' => 13,
            'price' => 12500,
        ]);

        Service::create([
            'category_id' => 5,
            'name' => 'PERFILADO O ALISADO DE CEJAS',
            'score_exchange' => 70,
            'score_accumulated' => 7,
            'price' => 7000,
        ]);

        Service::create([
            'category_id' => 5,
            'name' => 'FIJACIÓN DE CEJAS',
            'score_exchange' => 70,
            'score_accumulated' => 7,
            'price' => 7000,
        ]);

        Service::create([
            'category_id' => 5,
            'name' => 'EXTENSIÓN DE PESTAÑAS',
            'score_exchange' => 250,
            'score_accumulated' => 25,
            'price' => 25000,
        ]);

        Service::create([
            'category_id' => 5,
            'name' => 'LIMPIEZA FACIAL PROFUNDA',
            'score_exchange' => 250,
            'score_accumulated' => 25,
            'price' => 25000,
        ]);

        Service::create([
            'category_id' => 5,
            'name' => 'MAQUILLAJE',
            'score_exchange' => 100,
            'score_accumulated' => 10,
            'price' => 10000,
        ]);

        Service::create([
            'category_id' => 5,
            'name' => 'MAQUILLAJE NOVIA',
            'score_exchange' => 185,
            'score_accumulated' => 19,
            'price' => 18500,
        ]);

        Service::create([
            'category_id' => 5,
            'name' => 'LIFTING FACIAL CON RADIOFRECUENCIA',
            'score_exchange' => 200,
            'score_accumulated' => 20,
            'price' => 20000,
        ]);

        Service::create([
            'category_id' => 5,
            'name' => 'FOTOREJUVENECIMIENTO',
            'score_exchange' => 200,
            'score_accumulated' => 20,
            'price' => 20000,
        ]);

        Service::create([
            'category_id' => 5,
            'name' => 'PEELING ULTRASONIDO',
            'score_exchange' => 200,
            'score_accumulated' => 20,
            'price' => 20000,
        ]);

        /** CATEGORIA DE PELUQUERIA */

        Service::create([
            'category_id' => 6,
            'name' => 'TINTURA (CABELLO CORTO)',
            'score_exchange' => 250,
            'score_accumulated' => 25,
            'price' => 25000,
        ]);

        Service::create([
            'category_id' => 6,
            'name' => 'TINTURA (CABELLO LARGO)',
            'score_exchange' => 300,
            'score_accumulated' => 30,
            'price' => 30000,
        ]);

        Service::create([
            'category_id' => 6,
            'name' => 'TINTURA (SOLO APLICACION)',
            'score_exchange' => 200,
            'score_accumulated' => 20,
            'price' => 20000,
        ]);

        Service::create([
            'category_id' => 6,
            'name' => 'BRUSHING',
            'score_exchange' => 80,
            'score_accumulated' => 8,
            'price' => 8000,
        ]);

        Service::create([
            'category_id' => 6,
            'name' => 'BRUSHING + LAVADO',
            'score_exchange' => 100,
            'score_accumulated' => 10,
            'price' => 10000,
        ]);

        Service::create([
            'category_id' => 6,
            'name' => 'PLANCHADO CABELLO',
            'score_exchange' => 80,
            'score_accumulated' => 8,
            'price' => 8000,
        ]);

        Service::create([
            'category_id' => 6,
            'name' => 'PLANCHADO CABELLO + LAVADO',
            'score_exchange' => 100,
            'score_accumulated' => 10,
            'price' => 10000,
        ]);

        Service::create([
            'category_id' => 6,
            'name' => 'LAVADO CABELLO',
            'score_exchange' => 40,
            'score_accumulated' => 4,
            'price' => 4000,
        ]);

        Service::create([
            'category_id' => 6,
            'name' => 'CORTE DAMA',
            'score_exchange' => 90,
            'score_accumulated' => 9,
            'price' => 9000,
        ]);

        Service::create([
            'category_id' => 6,
            'name' => 'CORTE VARON',
            'score_exchange' => 50,
            'score_accumulated' => 5,
            'price' => 5000,
        ]);

        Service::create([
            'category_id' => 6,
            'name' => 'CORTE VARON + LAVADO',
            'score_exchange' => 60,
            'score_accumulated' => 6,
            'price' => 6000,
        ]);

        Service::create([
            'category_id' => 6,
            'name' => 'BARBERIA',
            'score_exchange' => 70,
            'score_accumulated' => 7,
            'price' => 7000,
        ]);

        Service::create([
            'category_id' => 6,
            'name' => 'CORTE NIÑO',
            'score_exchange' => 40,
            'score_accumulated' => 4,
            'price' => 4000,
        ]);

        Service::create([
            'category_id' => 6,
            'name' => 'MASAJE CAPILAR',
            'score_exchange' => 160,
            'score_accumulated' => 16,
            'price' => 16000,
        ]);

        Service::create([
            'category_id' => 6,
            'name' => 'AMPOLLAS',
            'score_exchange' => 150,
            'score_accumulated' => 15,
            'price' => 15000,
        ]);

        Service::create([
            'category_id' => 6,
            'name' => 'BALAYAGE (CABELLO CORTO)',
            'score_exchange' => 450,
            'score_accumulated' => 45,
            'price' => 45000,
        ]);

        Service::create([
            'category_id' => 6,
            'name' => 'BALAYAGE (CABELLO LARGO)',
            'score_exchange' => 650,
            'score_accumulated' => 65,
            'price' => 65000,
        ]);

        Service::create([
            'category_id' => 6,
            'name' => 'MECHAS (CABELLO CORTO + FONDO)',
            'score_exchange' => 350,
            'score_accumulated' => 35,
            'price' => 35000,
        ]);

        Service::create([
            'category_id' => 6,
            'name' => 'MECHAS (CABELLO LARGO + FONDO)',
            'score_exchange' => 450,
            'score_accumulated' => 45,
            'price' => 45000,
        ]);

        Service::create([
            'category_id' => 6,
            'name' => 'BOTOX CAPILAR (CABELLO CORTO)',
            'score_exchange' => 300,
            'score_accumulated' => 30,
            'price' => 30000,
        ]);

        Service::create([
            'category_id' => 6,
            'name' => 'BOTOX CAPILAR (CABELLO LARGO)',
            'score_exchange' => 400,
            'score_accumulated' => 40,
            'price' => 40000,
        ]);

        Service::create([
            'category_id' => 6,
            'name' => 'ALISADO PERMANENTE (CABELLO CORTO)',
            'score_exchange' => 500,
            'score_accumulated' => 50,
            'price' => 50000,
        ]);

        Service::create([
            'category_id' => 6,
            'name' => 'ALISADO PERMANENTE (CABELLO LARGO)',
            'score_exchange' => 700,
            'score_accumulated' => 70,
            'price' => 70000,
        ]);

        Service::create([
            'category_id' => 6,
            'name' => 'ALISADO COFFE PREMIUM (CABELLO CORTO)',
            'score_exchange' => 500,
            'score_accumulated' => 50,
            'price' => 50000,
        ]);

        Service::create([
            'category_id' => 6,
            'name' => 'ALISADO COFFE PREMIUM (CABELLO LARGO)',
            'score_exchange' => 700,
            'score_accumulated' => 70,
            'price' => 70000,
        ]);

        Service::create([
            'category_id' => 6,
            'name' => 'PEINADOS',
            'score_exchange' => 150,
            'score_accumulated' => 15,
            'price' => 15000,
        ]);

        Service::create([
            'category_id' => 6,
            'name' => 'PEINADOS NOVIA',
            'score_exchange' => 200,
            'score_accumulated' => 20,
            'price' => 20000,
        ]);

        Service::create([
            'category_id' => 6,
            'name' => 'VISOS (CABELLO CORTO)',
            'score_exchange' => 350,
            'score_accumulated' => 35,
            'price' => 35000,
        ]);

        Service::create([
            'category_id' => 6,
            'name' => 'VISOS (CABELLO LARGO)',
            'score_exchange' => 400,
            'score_accumulated' => 40,
            'price' => 40000,
        ]);

        Service::create([
            'category_id' => 6,
            'name' => 'REFLEJOS (CABELLO CORTO)',
            'score_exchange' => 250,
            'score_accumulated' => 25,
            'price' => 25000,
        ]);

        Service::create([
            'category_id' => 6,
            'name' => 'REFLEJOS (CABELLO LARGO)',
            'score_exchange' => 350,
            'score_accumulated' => 35,
            'price' => 35000,
        ]);

        /** CATEGORIA ESTETICA INTEGRAL */

        Service::create([
            'category_id' => 7,
            'name' => 'MASAJE REDUCTIVO Y REAFIRMANTE',
            'score_exchange' => 200,
            'score_accumulated' => 20,
            'price' => 20000,
        ]);

        Service::create([
            'category_id' => 7,
            'name' => 'MASAJE RELAJACIÓN',
            'score_exchange' => 180,
            'score_accumulated' => 18000,
            'price' => 18000,
        ]);

        Service::create([
            'category_id' => 7,
            'name' => 'MASAJE REDUCTIVO MANUAL',
            'score_exchange' => 185,
            'score_accumulated' => 19,
            'price' => 18500,
        ]);

        Service::create([
            'category_id' => 7,
            'name' => 'TENSOTERAPIA / YESOTERAPIA',
            'score_exchange' => 250,
            'score_accumulated' => 25,
            'price' => 25000,
        ]);

        Service::create([
            'category_id' => 7,
            'name' => 'TRATAMIENTO LIPOESCULTOR ABDOMEN',
            'score_exchange' => 185,
            'score_accumulated' => 19,
            'price' => 18500,
        ]);

        Service::create([
            'category_id' => 7,
            'name' => 'TRATAMIENTO LIPOESCULTOR PIERNAS',
            'score_exchange' => 250,
            'score_accumulated' => 25,
            'price' => 25000,
        ]);

        Service::create([
            'category_id' => 7,
            'name' => 'TRATAMIENTO LIPOESCULTOR GLUTEOS',
            'score_exchange' => 175,
            'score_accumulated' => 18,
            'price' => 17500,
        ]);

        Service::create([
            'category_id' => 7,
            'name' => 'TRATAMIENTO LIPOESCULTOR BRAZOS',
            'score_exchange' => 175,
            'score_accumulated' => 18,
            'price' => 17500,
        ]);

        Service::create([
            'category_id' => 7,
            'name' => 'TRATAMIENTO LIPOESCULTOR ROSTRO',
            'score_exchange' => 200,
            'score_accumulated' => 20,
            'price' => 20000,
        ]);

        Service::create([
            'category_id' => 7,
            'name' => 'TRATAMIENTO LIPOESCULTOR CUELLO',
            'score_exchange' => 150,
            'score_accumulated' => 15,
            'price' => 15000,
        ]);

        Service::create([
            'category_id' => 7,
            'name' => 'TRATAMIENTO LIPOESCULTOR ENTREPIERNAS',
            'score_exchange' => 175,
            'score_accumulated' => 18,
            'price' => 17500,
        ]);

        Service::create([
            'category_id' => 7,
            'name' => 'TRATAMIENTO LIPOESCULTOR DORSAL',
            'score_exchange' => 175,
            'score_accumulated' => 18,
            'price' => 17500,
        ]);

        /** CATEGORIA KINESIOLOGIA Y REHABILITACION */

        Service::create([
            'category_id' => 8,
            'name' => 'ULTRASONIDO',
            'score_exchange' => 200,
            'score_accumulated' => 20,
            'price' => 20000,
        ]);

        Service::create([
            'category_id' => 8,
            'name' => 'PRESOTERAPIA',
            'score_exchange' => 150,
            'score_accumulated' => 15,
            'price' => 15000,
        ]);

        Service::create([
            'category_id' => 8,
            'name' => 'ELECTROTERAPIA (BODY SIMULATOR)',
            'score_exchange' => 150,
            'score_accumulated' => 15,
            'price' => 15000,
        ]);

        Service::create([
            'category_id' => 8,
            'name' => 'TERAPIA DESCONTRACTURANTE',
            'score_exchange' => 200,
            'score_accumulated' => 20,
            'price' => 20000,
        ]);

        Service::create([
            'category_id' => 8,
            'name' => 'DRENAJE LINFATICO MANUAL',
            'score_exchange' => 200,
            'score_accumulated' => 20,
            'price' => 20000,
        ]);

        Service::create([
            'category_id' => 8,
            'name' => 'TRATAMIENTO POST-OPERATORIO',
            'score_exchange' => 250,
            'score_accumulated' => 25,
            'price' => 25000,
        ]);

        Service::create([
            'category_id' => 8,
            'name' => 'ELECTROPORACIÓN',
            'score_exchange' => 200,
            'score_accumulated' => 20,
            'price' => 20000,
        ]);

        Service::create([
            'category_id' => 8,
            'name' => 'ELECTROPORACIÓN GLUTEOS',
            'score_exchange' => 250,
            'score_accumulated' => 25,
            'price' => 25000,
        ]);

        Service::create([
            'category_id' => 8,
            'name' => 'VENDAJE NEUROMUSCULAR',
            'score_exchange' => 150,
            'score_accumulated' => 15,
            'price' => 15000,
        ]);

        Service::create([
            'category_id' => 8,
            'name' => 'RADIOFRECUENCIA CAPACITIVA TRIPOLLAR',
            'score_exchange' => 185,
            'score_accumulated' => 19,
            'price' => 18500,
        ]);

        /** CATEGORIA DE NUTRICION */

        Service::create([
            'category_id' => 9,
            'name' => 'EVALUACIÓN NUTRICIONAL COMPLETA',
            'score_exchange' => 200,
            'score_accumulated' => 20,
            'price' => 20000,
        ]);

        Service::create([
            'category_id' => 9,
            'name' => 'EVALUACIÓN NUTRICIONAL',
            'score_exchange' => 150,
            'score_accumulated' => 15,
            'price' => 15000,
        ]);

        //factory(Service::class, 100)->create();
    }
}
