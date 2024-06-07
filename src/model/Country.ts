export interface Country {
  success: boolean;
  error: string;
  data: Datum[];
}

export interface Datum {
  id_pais: number;
  nombre_pais: string;
  codigo_pais: string;
}
