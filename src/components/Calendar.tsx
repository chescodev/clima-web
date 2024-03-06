import { useState } from 'react';

const DatePicker: React.FC = () => {
  const [day, setDay] = useState<string>('');
  const [month, setMonth] = useState<string>('');
  const [year, setYear] = useState<string>('');

  // Array con los nombres de los meses
  const monthNames: string[] = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  // Generar opciones para el día (1-31)
  const daysOptions: JSX.Element[] = [];
  for (let i = 1; i <= 31; i++) {
    daysOptions.push(<option key={i} value={i.toString()}>{i}</option>);
  }

  // Generar opciones para el mes (Enero - Diciembre)
  const monthsOptions: JSX.Element[] = monthNames.map((monthName, index) => (
    <option key={index + 1} value={(index + 1).toString()}>{monthName}</option>
  ));

  // Generar opciones para el año (2020-2030)
  const yearsOptions: JSX.Element[] = [];
  for (let i = 2017; i <= 2024; i++) {
    yearsOptions.push(<option key={i} value={i.toString()}>{i}</option>);
  }

  return (
    <div className="flex ">
      <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
      focus:ring-blue-500 focus0:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
      dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50 mr-1" 
      value={day} onChange={(e) => setDay(e.target.value)}>
        <option value="">Día</option>
        {daysOptions}
      </select>
      <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
      focus:ring-blue-500 focus0:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
      dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50 mr-1" 
      value={month} onChange={(e) => setMonth(e.target.value)}>
        <option value="">Mes</option>
        {monthsOptions}
      </select>
      <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
      focus:ring-blue-500 focus0:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
      dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50 mr-1" 
      value={year} onChange={(e) => setYear(e.target.value)}>
        <option value="">Año</option>
        {yearsOptions}
      </select>
    </div>
  );
};

export default DatePicker;
