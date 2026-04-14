export interface KanbanItem {
	noteTitle: string;
	addedAt: number;
	children?: KanbanItem[];
}

export type ColumnId = 'ideas' | 'step-outline' | 'plot-development' | 'treatment' | 'project';

// ── 멀티 뷰 ──────────────────────────────────────────────────────────────
export type DashboardViewKind = 'story' | 'gantt';

// ── 간트 차트 ─────────────────────────────────────────────────────────────

export type GanttTaskStatus = 'planned' | 'in-progress' | 'done';

export interface GanttTask {
	id: string;
	title: string;
	startDate: string;   // 'YYYY-MM-DD'
	endDate: string;     // 'YYYY-MM-DD' (inclusive)
	progress: number;    // 0..100
	status: GanttTaskStatus;
}

export type GanttAccent = 'tertiary' | 'secondary' | 'muted';

export interface GanttPhase {
	id: string;
	displayName: string;
	accent: GanttAccent;
}

export interface GanttData {
	phases: GanttPhase[];
	tasks: Record<string, GanttTask[]>;  // key = GanttPhase.id
}

export interface KanbanData {
	columns: Record<ColumnId, KanbanItem[]>;
}

export interface ColumnDef {
	id: ColumnId;
	emoji: string;       // fixed emoji prefix (not editable by user)
	displayName: string; // default text label (editable by user)
	placeholder: string;
}

// ── 참고자료 패널 (동적 탭) ────────────────────────────────────

/** 사용자가 자유롭게 추가·수정·삭제하는 탭 하나 */
export interface ReferenceTab {
	id: string;          // 고유 식별자 (timestamp base36)
	displayName: string;
	icon: string;        // 이모지 1개
}

/** 참고자료 전체 데이터 */
export interface ReferenceData {
	customTabs: ReferenceTab[];
	items: Record<string, KanbanItem[]>; // key = ReferenceTab.id
}
