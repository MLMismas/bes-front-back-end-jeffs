export interface ParkViewModel {
  numberOfParks: number;
  list: ParkViewModelListItem[]
}

export interface ParkViewModelListItem {
  id: string;
  name: string;
  acreage: string;
  notes: string;
}

export interface ParkCreate {
  name: string;
  acreage?: string;
  notes?: string;
}
