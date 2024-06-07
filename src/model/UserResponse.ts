export interface UserResponse {
  coins: Coin[];
  correo: string;
  history: History[];
  id: number;
  id_pais: number;
  nombre: string;
  pais: string;
  saldo: string;
  totalCoin: TotalCoin[];
}

export interface Coin {
  code: string;
  description: string;
  id: number;
  id_country: number;
  imagen: string;
  price_equivalent: string;
  variation: string;
}

export interface History {
  descripcion_accion: string;
  fecha_accion: Date;
  id: number;
  id_accion: string;
  id_moneda: number;
  id_pais: number;
  nombre_moneda: string;
  valor_accion: number;
}

export interface TotalCoin {
  cantidad: number;
  id_moneda: number;
  nombre_moneda: string;
  imagen: string;
  variacion: string;
  abreviacion: string;
  precio: string;
}
