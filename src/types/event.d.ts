export interface EventType {
  id: number;
  title: string;
  start_time: string;
  end_time: string;
  status: "pending" | "done" | "in-progress";
  address?: string;
}
