-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: b0joms2rixexqwtbnoht-mysql.services.clever-cloud.com:3306
-- Tiempo de generación: 15-11-2024 a las 00:00:33
-- Versión del servidor: 8.0.22-13
-- Versión de PHP: 8.2.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `b0joms2rixexqwtbnoht`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `agenda`
--

CREATE TABLE `agenda` (
  `id` int NOT NULL,
  `id_medico_especialidad` int NOT NULL,
  `estado` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `agenda`
--

INSERT INTO `agenda` (`id`, `id_medico_especialidad`, `estado`) VALUES
(1, 2566, 1),
(2, 2588, 1),
(3, 3510, 1),
(4, 3129, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alergias`
--

CREATE TABLE `alergias` (
  `id` int NOT NULL,
  `id_alergias_nomecladas` int NOT NULL,
  `id_alergia_importancia` int NOT NULL,
  `fecha_desde` date NOT NULL,
  `fecha_hasta` date DEFAULT NULL,
  `id_atenciones` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `alergias`
--

INSERT INTO `alergias` (`id`, `id_alergias_nomecladas`, `id_alergia_importancia`, `fecha_desde`, `fecha_hasta`, `id_atenciones`) VALUES
(1, 4, 3, '2018-09-01', NULL, 1),
(2, 4, 3, '2015-11-06', NULL, 8),
(3, 1, 1, '2009-11-06', NULL, 9);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alergias_nomecladas`
--

CREATE TABLE `alergias_nomecladas` (
  `id` int NOT NULL,
  `nombre_alergia` varchar(100) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `alergias_nomecladas`
--

INSERT INTO `alergias_nomecladas` (`id`, `nombre_alergia`) VALUES
(1, 'Al maní'),
(2, 'Al polen'),
(3, 'A pelos de animales'),
(4, 'A la penicilina');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alergia_importancia`
--

CREATE TABLE `alergia_importancia` (
  `id` int NOT NULL,
  `importancia` varchar(50) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `alergia_importancia`
--

INSERT INTO `alergia_importancia` (`id`, `importancia`) VALUES
(1, 'Leve'),
(2, 'Normal'),
(3, 'Alta');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `antecedentes_patologicos`
--

CREATE TABLE `antecedentes_patologicos` (
  `id` int NOT NULL,
  `descripcion` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `fecha_desde` date NOT NULL,
  `fecha_hasta` date DEFAULT NULL,
  `id_atenciones` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `antecedentes_patologicos`
--

INSERT INTO `antecedentes_patologicos` (`id`, `descripcion`, `fecha_desde`, `fecha_hasta`, `id_atenciones`) VALUES
(1, 'Hipertenso', '2014-09-01', '0000-00-00', 1),
(2, 'ninguno', '2014-09-01', NULL, 8),
(3, 'Madre hipertensa, padre con úlcera péptica.', '2008-11-06', NULL, 9),
(4, 'Antecedentes de úlcera gástrica tratada hace 2 años. ', '2001-09-01', NULL, 10);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `atenciones`
--

CREATE TABLE `atenciones` (
  `id` int NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  `id_turnos` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `atenciones`
--

INSERT INTO `atenciones` (`id`, `fecha`, `hora`, `id_turnos`) VALUES
(1, '2024-10-31', '09:01:00', 3),
(2, '2024-10-31', '09:16:00', 4),
(3, '2024-11-13', '13:06:19', 4),
(4, '2024-11-13', '13:08:34', 4),
(5, '2024-11-13', '13:21:43', 4),
(6, '2024-11-13', '13:31:48', 4),
(7, '2024-11-13', '13:37:54', 5),
(8, '2024-11-14', '13:35:45', 42),
(9, '2024-11-14', '13:53:39', 14),
(10, '2024-11-14', '16:34:50', 14);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `diagnostico`
--

CREATE TABLE `diagnostico` (
  `id` int NOT NULL,
  `descripcion` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  `tipo` varchar(11) COLLATE utf8mb4_general_ci NOT NULL,
  `id_atenciones` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `diagnostico`
--

INSERT INTO `diagnostico` (`id`, `descripcion`, `tipo`, `id_atenciones`) VALUES
(2, 'Gastritis', 'Preliminar', 1),
(3, 'Paciente asintomático. Examen físico sin hallazgos patológicos', 'confirmados', 8),
(4, 'Sospecha de colecistitis aguda. Indicar ecografía abdominal', 'preliminar', 9),
(5, 'Gastritis aguda. Se sugiere realizar análisis de sangre para descartar infección bacteriana (Helicobacter pylori) y examen de ultrasonido abdominal si persiste el dolor', 'Preliminar', 10);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `especialidad`
--

CREATE TABLE `especialidad` (
  `id` int NOT NULL,
  `nombre_especialidad` varchar(50) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `especialidad`
--

INSERT INTO `especialidad` (`id`, `nombre_especialidad`) VALUES
(1, 'Clínica Medica'),
(2, 'Pediatría '),
(3, 'Cirugía General'),
(4, 'Cardiología'),
(5, 'Dermatología '),
(6, 'Ginecología ');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `evoluciones`
--

CREATE TABLE `evoluciones` (
  `id` int NOT NULL,
  `descripcion` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  `id_atenciones` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `evoluciones`
--

INSERT INTO `evoluciones` (`id`, `descripcion`, `id_atenciones`) VALUES
(1, 'Evolucion 1 ....', 1),
(2, 'Fecha y hora: 15/11/2024  17:30:00 \r\nMotivo de la consulta: Chequeo general  \r\nTratamiento recomendado: \r\nObservaciones: evo2', 8),
(3, 'Paciente refiere dolor abdominal tipo cólico en mesogastrio, de 3 en escala numérica del 1 al 10, iniciado hace unos meses. Acompañado de [otros síntomas: náuseas, vómitos, fiebre, etc.]. Se sospecha ', 9),
(4, 'Fecha: 14/11/2024  \r\nHora: 08:30:00  \r\nMotivo: Dolor de estómago   \r\nTratamiento: \r\nComentarios: evolución 16:34', 10);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `habitos`
--

CREATE TABLE `habitos` (
  `id` int NOT NULL,
  `descripcion` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `fecha_desde` date NOT NULL,
  `fecha_hasta` date DEFAULT NULL,
  `id_atenciones` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `habitos`
--

INSERT INTO `habitos` (`id`, `descripcion`, `fecha_desde`, `fecha_hasta`, `id_atenciones`) VALUES
(1, 'Fumador', '2014-01-01', NULL, 1),
(2, 'Fumador de 1 paquete al día, sedentario, consumo excesivo de cafeína', '2014-01-01', NULL, 8),
(3, 'Dieta rica en grasas, consumo frecuente de alimentos picantes', '2014-10-01', NULL, 9),
(4, 'Paciente con hábito de consumir comida picante y café en exceso. Fumador ocasional ', '2018-09-01', NULL, 10);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medicamentos`
--

CREATE TABLE `medicamentos` (
  `id` int NOT NULL,
  `nombre_generico` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `nombre_comercial` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `cantidad` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `indicacion` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `id_atenciones` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `medicamentos`
--

INSERT INTO `medicamentos` (`id`, `nombre_generico`, `nombre_comercial`, `cantidad`, `indicacion`, `id_atenciones`) VALUES
(1, 'Amoxidal', 'Amoxidal 500', '500 mg', 'un comprimido cada 12 hs', 1),
(2, '', '', '', 'No toma medicación habitual.', 8),
(3, '', '', '', 'Omeprazol 40 mg cada 12 horas.', 9),
(4, 'omeprazol', 'Prilosec', '20 mg', 'Actualmente toma omeprazol 20 mg/día para control de acidez gástrica. .', 10);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medico`
--

CREATE TABLE `medico` (
  `id` int NOT NULL,
  `dni` int NOT NULL,
  `usuario` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `contraseña` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `estado` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `medico`
--

INSERT INTO `medico` (`id`, `dni`, `usuario`, `contraseña`, `estado`) VALUES
(1, 31533950, 'juanbossio', '1234', 1),
(2, 38237985, 'bmagni', '1234', 1),
(3, 32981529, 'brodriguez', '1234', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medico_especialidad`
--

CREATE TABLE `medico_especialidad` (
  `matricula` int NOT NULL,
  `id_medico` int NOT NULL,
  `id_especialidad` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `medico_especialidad`
--

INSERT INTO `medico_especialidad` (`matricula`, `id_medico`, `id_especialidad`) VALUES
(2566, 1, 1),
(2588, 1, 3),
(3129, 3, 2),
(3510, 2, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paciente`
--

CREATE TABLE `paciente` (
  `id` int NOT NULL,
  `dni` int NOT NULL,
  `ObraSocial` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `estado` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `paciente`
--

INSERT INTO `paciente` (`id`, `dni`, `ObraSocial`, `estado`) VALUES
(1, 36555621, 'Sancor', 1),
(2, 35236364, 'Particular', 1),
(3, 22597868, 'OSDE', 1),
(4, 29429136, 'Visitar', 1),
(5, 40597513, 'Dosep', 1),
(6, 26987456, 'Sancor', 1),
(7, 50539965, 'Visitar', 1),
(8, 32038536, 'Dosep', 1),
(9, 8654962, 'Dosep', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona`
--

CREATE TABLE `persona` (
  `dni` int NOT NULL,
  `nombre` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `apellido` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `genero` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `telefono` varchar(15) COLLATE utf8mb4_general_ci NOT NULL,
  `Email` varchar(254) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `persona`
--

INSERT INTO `persona` (`dni`, `nombre`, `apellido`, `genero`, `fecha_nacimiento`, `telefono`, `Email`) VALUES
(8654962, 'Guillermo', 'Furnari', 'Masculino', '1976-10-01', '2664987412', 'gfurnari@gmail.com'),
(22597868, 'Ronio', 'Guaycochea', 'Masculino', '1970-03-05', '2664111235', 'rguaycochea@gmail.com'),
(26987456, 'Maria', 'Quiroga', 'Masculino', '1980-06-09', '', 'mquiroga@gmail.com'),
(29429136, 'Carina', 'Leggio', 'Femenino', '1982-09-21', '', 'cleggio@gmail.com'),
(31533950, 'Juan', 'Bossio', 'Masculino', '1984-03-23', '2664236588', 'jbossio@gmail.com'),
(32038536, 'Luis', 'Rosales', 'Masculino', '1985-12-28', '2664570563', 'lrosales@gmail.com'),
(32981529, 'Betiana', 'Rodriguez', 'Femenino', '1994-08-18', '2664336677', 'brodriguez@gmail.com'),
(35236364, 'Antonio', 'Lorenzo', 'Masculino', '1996-12-09', '2664335125', 'alorenzo@gmail.com'),
(36555621, 'Pablo', 'Funes', 'Masculino', '1995-10-31', '2664985126', 'pfunes@gmail.com'),
(38237985, 'Bruno', 'Magni', 'Masculino', '1990-04-04', '2664987456', 'bmagni@gmail.com'),
(40597513, 'Pablo', 'Polanco', 'Masculino', '1979-05-20', '2664123969', 'ppolanco@gmail.com'),
(50539965, 'Joaquin', 'Perez', 'Masculino', '2010-11-05', '', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `turnos`
--

CREATE TABLE `turnos` (
  `idturno` int NOT NULL,
  `id_agenda` int NOT NULL,
  `id_paciente` int NOT NULL,
  `fecha` date NOT NULL,
  `motivo` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  `hora_inicio` time NOT NULL,
  `hora_fin` time NOT NULL,
  `id_estado` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `turnos`
--

INSERT INTO `turnos` (`idturno`, `id_agenda`, `id_paciente`, `fecha`, `motivo`, `hora_inicio`, `hora_fin`, `id_estado`) VALUES
(3, 1, 1, '2024-10-31', 'Dolor de espalda', '09:00:00', '09:15:00', 1),
(4, 1, 2, '2024-10-31', 'chequeo general', '09:15:00', '09:30:00', 1),
(5, 1, 3, '2024-10-31', 'Dolor abdominal', '09:30:00', '09:45:00', 1),
(7, 2, 4, '2024-11-15', 'operación: apéndice ', '09:00:00', '09:15:00', 1),
(8, 2, 5, '2024-11-15', 'consulta para operar', '09:15:00', '09:30:00', 1),
(9, 3, 6, '2024-11-14', 'Chequeo general', '10:00:00', '10:15:00', 1),
(10, 4, 7, '2024-11-15', 'control niñez', '12:00:00', '12:15:00', 1),
(12, 3, 1, '2024-11-10', 'dolor lumbar', '12:00:00', '12:15:00', 1),
(13, 1, 1, '2024-11-14', 'Dolor de articulaciones', '08:00:00', '08:30:00', 1),
(14, 1, 2, '2024-11-14', 'Dolor de estómago ', '08:30:00', '09:00:00', 2),
(15, 1, 3, '2024-11-14', 'Dolor de pecho', '09:00:00', '09:30:00', 1),
(16, 1, 4, '2024-11-14', 'Dolor mestrual', '09:30:00', '10:00:00', 1),
(17, 1, 5, '2024-11-14', 'Problemas instestinales', '10:00:00', '10:30:00', 1),
(18, 1, 6, '2024-11-14', 'Diarrea', '10:30:00', '11:00:00', 1),
(19, 2, 7, '2024-11-14', 'Dolor abdominal', '17:00:00', '17:30:00', 1),
(20, 2, 8, '2024-11-14', 'Pérdida de peso involuntaria', '17:30:00', '18:00:00', 1),
(23, 2, 9, '2024-11-14', 'Hernia', '18:00:00', '18:30:00', 1),
(24, 2, 5, '2024-11-14', 'Hemorroides', '18:30:00', '19:00:00', 1),
(25, 1, 1, '2024-11-15', 'Asma', '08:00:00', '08:30:00', 1),
(26, 1, 2, '2024-11-15', 'Diarrea', '08:30:00', '09:00:00', 1),
(27, 1, 3, '2024-11-15', 'Nauseas y vómitos', '08:30:00', '09:00:00', 1),
(28, 1, 4, '2024-11-15', 'Fiebre', '09:00:00', '09:30:00', 1),
(29, 1, 5, '2024-11-15', 'Chequeo general', '09:30:00', '10:00:00', 1),
(30, 2, 6, '2024-11-15', 'Lesiones abdominales', '17:00:00', '17:30:00', 1),
(31, 2, 7, '2024-11-15', 'Varices', '17:30:00', '18:00:00', 1),
(34, 3, 9, '2024-11-14', 'Dolor o molestias en el pecho', '10:30:00', '11:00:00', 1),
(35, 3, 6, '2024-11-14', 'Dificultad para respirar', '11:00:00', '11:30:00', 1),
(36, 3, 1, '2024-11-14', 'Sensación de corazón acelerado', '11:30:00', '12:00:00', 1),
(37, 4, 5, '2024-11-14', ' Tos, fiebre', '08:00:00', '08:30:00', 1),
(38, 4, 6, '2024-11-14', 'Dolor de oído', '08:30:00', '09:00:00', 1),
(39, 4, 7, '2024-11-14', 'Dolor de garganta', '09:00:00', '09:30:00', 1),
(40, 4, 8, '2024-11-14', 'Picazón', '09:30:00', '10:00:00', 1),
(41, 4, 9, '2024-11-15', 'Quemaduras', '17:00:00', '17:30:00', 1),
(42, 4, 1, '2024-11-15', 'Chequeo general', '17:30:00', '18:00:00', 1),
(43, 4, 4, '2024-11-15', 'Dolor de cabeza', '18:00:00', '18:30:00', 1),
(44, 4, 6, '2024-11-15', 'Dolor de garganta, fiebre, dificultad para tragar', '18:30:00', '19:00:00', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `turnos_estado`
--

CREATE TABLE `turnos_estado` (
  `id` int NOT NULL,
  `estadonombre` varchar(50) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `turnos_estado`
--

INSERT INTO `turnos_estado` (`id`, `estadonombre`) VALUES
(1, 'Pendiente'),
(2, 'Atendido'),
(3, 'Cancelado');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `agenda`
--
ALTER TABLE `agenda`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_medico-especialidad` (`id_medico_especialidad`);

--
-- Indices de la tabla `alergias`
--
ALTER TABLE `alergias`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_alergias_nomecladas` (`id_alergias_nomecladas`),
  ADD KEY `id_alergia_importancia` (`id_alergia_importancia`),
  ADD KEY `id_atenciones` (`id_atenciones`);

--
-- Indices de la tabla `alergias_nomecladas`
--
ALTER TABLE `alergias_nomecladas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `alergia_importancia`
--
ALTER TABLE `alergia_importancia`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `antecedentes_patologicos`
--
ALTER TABLE `antecedentes_patologicos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_atenciones` (`id_atenciones`);

--
-- Indices de la tabla `atenciones`
--
ALTER TABLE `atenciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_turnos` (`id_turnos`);

--
-- Indices de la tabla `diagnostico`
--
ALTER TABLE `diagnostico`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_atenciones` (`id_atenciones`);

--
-- Indices de la tabla `especialidad`
--
ALTER TABLE `especialidad`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `evoluciones`
--
ALTER TABLE `evoluciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_atenciones` (`id_atenciones`);

--
-- Indices de la tabla `habitos`
--
ALTER TABLE `habitos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_atenciones` (`id_atenciones`);

--
-- Indices de la tabla `medicamentos`
--
ALTER TABLE `medicamentos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_atenciones` (`id_atenciones`);

--
-- Indices de la tabla `medico`
--
ALTER TABLE `medico`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `dni` (`dni`);

--
-- Indices de la tabla `medico_especialidad`
--
ALTER TABLE `medico_especialidad`
  ADD PRIMARY KEY (`matricula`),
  ADD KEY `id_especialidd` (`id_especialidad`),
  ADD KEY `id_medico` (`id_medico`);

--
-- Indices de la tabla `paciente`
--
ALTER TABLE `paciente`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `dni` (`dni`);

--
-- Indices de la tabla `persona`
--
ALTER TABLE `persona`
  ADD PRIMARY KEY (`dni`),
  ADD UNIQUE KEY `dni` (`dni`),
  ADD UNIQUE KEY `dni_2` (`dni`);

--
-- Indices de la tabla `turnos`
--
ALTER TABLE `turnos`
  ADD PRIMARY KEY (`idturno`),
  ADD KEY `id_agenda` (`id_agenda`),
  ADD KEY `id_paciente` (`id_paciente`),
  ADD KEY `id_estado` (`id_estado`);

--
-- Indices de la tabla `turnos_estado`
--
ALTER TABLE `turnos_estado`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `agenda`
--
ALTER TABLE `agenda`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `alergias`
--
ALTER TABLE `alergias`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `alergias_nomecladas`
--
ALTER TABLE `alergias_nomecladas`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `alergia_importancia`
--
ALTER TABLE `alergia_importancia`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `antecedentes_patologicos`
--
ALTER TABLE `antecedentes_patologicos`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `atenciones`
--
ALTER TABLE `atenciones`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `diagnostico`
--
ALTER TABLE `diagnostico`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `especialidad`
--
ALTER TABLE `especialidad`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `evoluciones`
--
ALTER TABLE `evoluciones`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `habitos`
--
ALTER TABLE `habitos`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `medicamentos`
--
ALTER TABLE `medicamentos`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `medico`
--
ALTER TABLE `medico`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `paciente`
--
ALTER TABLE `paciente`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `turnos`
--
ALTER TABLE `turnos`
  MODIFY `idturno` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT de la tabla `turnos_estado`
--
ALTER TABLE `turnos_estado`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `agenda`
--
ALTER TABLE `agenda`
  ADD CONSTRAINT `agenda_ibfk_1` FOREIGN KEY (`id_medico_especialidad`) REFERENCES `medico_especialidad` (`matricula`);

--
-- Filtros para la tabla `alergias`
--
ALTER TABLE `alergias`
  ADD CONSTRAINT `alergias_ibfk_1` FOREIGN KEY (`id_alergias_nomecladas`) REFERENCES `alergias_nomecladas` (`id`),
  ADD CONSTRAINT `alergias_ibfk_2` FOREIGN KEY (`id_alergia_importancia`) REFERENCES `alergia_importancia` (`id`),
  ADD CONSTRAINT `alergias_ibfk_3` FOREIGN KEY (`id_atenciones`) REFERENCES `atenciones` (`id`);

--
-- Filtros para la tabla `antecedentes_patologicos`
--
ALTER TABLE `antecedentes_patologicos`
  ADD CONSTRAINT `antecedentes_patologicos_ibfk_1` FOREIGN KEY (`id_atenciones`) REFERENCES `atenciones` (`id`);

--
-- Filtros para la tabla `atenciones`
--
ALTER TABLE `atenciones`
  ADD CONSTRAINT `atenciones_ibfk_1` FOREIGN KEY (`id_turnos`) REFERENCES `turnos` (`idturno`);

--
-- Filtros para la tabla `diagnostico`
--
ALTER TABLE `diagnostico`
  ADD CONSTRAINT `diagnostico_ibfk_1` FOREIGN KEY (`id_atenciones`) REFERENCES `atenciones` (`id`);

--
-- Filtros para la tabla `evoluciones`
--
ALTER TABLE `evoluciones`
  ADD CONSTRAINT `evoluciones_ibfk_1` FOREIGN KEY (`id_atenciones`) REFERENCES `atenciones` (`id`);

--
-- Filtros para la tabla `habitos`
--
ALTER TABLE `habitos`
  ADD CONSTRAINT `habitos_ibfk_1` FOREIGN KEY (`id_atenciones`) REFERENCES `atenciones` (`id`);

--
-- Filtros para la tabla `medicamentos`
--
ALTER TABLE `medicamentos`
  ADD CONSTRAINT `medicamentos_ibfk_1` FOREIGN KEY (`id_atenciones`) REFERENCES `atenciones` (`id`);

--
-- Filtros para la tabla `medico`
--
ALTER TABLE `medico`
  ADD CONSTRAINT `medico_ibfk_1` FOREIGN KEY (`dni`) REFERENCES `persona` (`dni`);

--
-- Filtros para la tabla `medico_especialidad`
--
ALTER TABLE `medico_especialidad`
  ADD CONSTRAINT `medico_especialidad_ibfk_1` FOREIGN KEY (`id_especialidad`) REFERENCES `especialidad` (`id`),
  ADD CONSTRAINT `medico_especialidad_ibfk_2` FOREIGN KEY (`id_medico`) REFERENCES `medico` (`id`);

--
-- Filtros para la tabla `paciente`
--
ALTER TABLE `paciente`
  ADD CONSTRAINT `paciente_ibfk_1` FOREIGN KEY (`dni`) REFERENCES `persona` (`dni`);

--
-- Filtros para la tabla `turnos`
--
ALTER TABLE `turnos`
  ADD CONSTRAINT `turnos_ibfk_1` FOREIGN KEY (`id_agenda`) REFERENCES `agenda` (`id`),
  ADD CONSTRAINT `turnos_ibfk_2` FOREIGN KEY (`id_paciente`) REFERENCES `paciente` (`id`),
  ADD CONSTRAINT `turnos_ibfk_3` FOREIGN KEY (`id_estado`) REFERENCES `turnos_estado` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
