export interface ICategory {
  name: string;
  description: string;
}

export interface IService {
  name: string;
  category_name: string;
  description: string;
  total_cost?: number;
  duration?: string;
  most_wanted: boolean;
}

interface ISteps {
  title: string;
  subtitle: string;
  treatment_duration: string;
  treatment_center: string;
  infoline: string;
  cost: number;
}

export interface IServiceDetails extends IService {
  treatment_duration: string;
  treatment_center: string;
  infoline: string;
  step_count: number;
  required_document: string[];
  steps?: ISteps[];
}

export interface IDemand {
  nom_service: string;
  time_elapsed: string;
  status: string;
}
