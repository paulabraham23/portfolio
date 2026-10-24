import type { ProjectStatus } from "@/content/site";

const LABELS: Record<ProjectStatus, string> = {
  published: "Published",
  "in-development": "In development",
  completed: "Completed",
  ongoing: "Ongoing",
};

const CLASS: Record<ProjectStatus, string> = {
  published: "status-published",
  "in-development": "status-in-development",
  completed: "status-completed",
  ongoing: "status-ongoing",
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span className={`status-pill ${CLASS[status]}`}>{LABELS[status]}</span>
  );
}
