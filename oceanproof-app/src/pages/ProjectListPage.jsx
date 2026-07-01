import { useMemo, useState } from 'react';
import { SiteHeader } from '../components/layout/SiteHeader';
import { SiteFooter } from '../components/layout/SiteFooter';
import { ScreenCard } from '../components/ui/ScreenCard';
import { ProjectCard } from '../components/ui/ProjectCard';
import { projects } from '../data/mockData';

const filters = ['전체', '진행중', '모집중'];

export function ProjectListPage() {
  const [filter, setFilter] = useState('전체');
  const [search, setSearch] = useState('');

  const filtered = useMemo(
    () =>
      projects.filter((p) => {
        const matchesFilter = filter === '전체' || p.status === filter;
        const matchesSearch = !search || p.name.includes(search) || p.region.includes(search);
        return matchesFilter && matchesSearch;
      }),
    [filter, search]
  );

  return (
    <ScreenCard>
      <SiteHeader
        center={
          <div className="row gap24 site-nav">
            <div>프로젝트</div>
          </div>
        }
      />
      <div className="pad32 col gap16">
        <div className="row between center wrap gap12">
          <div className="h2">해양 복원 프로젝트</div>
          <div className="row gap8 wrap">
            <input
              className="wf-input"
              style={{ width: 220 }}
              placeholder="지역 검색"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {filters.map((f) => (
              <button
                type="button"
                key={f}
                className={`pill choice ${filter === f ? 'selected' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
        <div className="row gap16 wrap">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
          {filtered.length === 0 && <div className="txt">조건에 맞는 프로젝트가 없습니다.</div>}
        </div>
      </div>
      <SiteFooter />
    </ScreenCard>
  );
}
