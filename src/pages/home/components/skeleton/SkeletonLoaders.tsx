import { Box, Skeleton } from '@mui/material';
import { SectionKey } from '../../data/mockApi';

const bg = 'var(--skeleton-bg)';

const S = (props: React.ComponentProps<typeof Skeleton>) => (
  <Skeleton animation="wave" {...props} sx={{ bgcolor: bg, ...props.sx }} />
);

function PillRow({ count, widths }: { count: number; widths?: number[] }) {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', mt: 0.75 }}>
      {Array.from({ length: count }).map((_, i) => (
        <S
          key={i}
          variant="rounded"
          width={widths?.[i] ?? 70}
          height={24}
          sx={{ borderRadius: '20px' }}
        />
      ))}
    </Box>
  );
}

function IconRow() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
      <S variant="circular" width={18} height={18} />
      <S variant="text" width="55%" height={16} />
    </Box>
  );
}

// ─── HOME ───────────────────────────────────────────────────────────────────
export function HomeSkeleton() {
  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        p: '1.5rem 1.5rem 2rem',
        '@media (min-width:768px)': { p: '2rem 2.5rem' },
        '@media (min-width:1024px)': { p: '2.5rem 3rem' },
      }}
    >
      <S variant="circular" width={110} height={110} sx={{ mb: 2 }} />
      <S variant="text" width="38%" height={14} sx={{ mb: 0.75 }} />
      <S variant="text" width="65%" height={44} sx={{ mb: 0.25 }} />
      <S variant="text" width="50%" height={44} sx={{ mb: 1.5 }} />
      <S variant="text" width="100%" height={14} sx={{ mb: 0.6 }} />
      <S variant="text" width="100%" height={14} sx={{ mb: 0.6 }} />
      <S variant="text" width="75%" height={14} sx={{ mb: 2 }} />
      <PillRow count={3} widths={[100, 130, 90]} />
      <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
        {[1, 2, 3].map((i) => (
          <S key={i} variant="circular" width={38} height={38} />
        ))}
      </Box>
    </Box>
  );
}

// ─── ABOUT ──────────────────────────────────────────────────────────────────
export function AboutSkeleton() {
  return (
    <Box sx={{ p: '1.5rem 1.5rem 2rem' }}>
      <S variant="text" width="30%" height={36} sx={{ mb: 2 }} />
      <S variant="text" width="45%" height={22} sx={{ mb: 1.5 }} />
      <S variant="text" width="100%" height={14} sx={{ mb: 0.6 }} />
      <S variant="text" width="100%" height={14} sx={{ mb: 0.6 }} />
      <S variant="text" width="80%" height={14} sx={{ mb: 2.5 }} />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 2.5 }}>
        <IconRow />
        <IconRow />
        <IconRow />
        <IconRow />
      </Box>
      <S variant="text" width="28%" height={12} sx={{ mb: 0.75 }} />
      <PillRow count={3} widths={[140, 120, 110]} />
      <S variant="text" width="22%" height={12} sx={{ mt: 1.75, mb: 0.75 }} />
      <PillRow count={4} widths={[60, 90, 100, 75]} />
      <S variant="rounded" width={90} height={36} sx={{ mt: 3, borderRadius: '8px' }} />
    </Box>
  );
}

// ─── SKILLS ─────────────────────────────────────────────────────────────────
function SkillCardRow({ count }: { count: number }) {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', mb: 2 }}>
      {Array.from({ length: count }).map((_, i) => (
        <S key={i} variant="rounded" width={68} height={85} sx={{ borderRadius: '8px' }} />
      ))}
    </Box>
  );
}

export function SkillsSkeleton() {
  return (
    <Box sx={{ p: '1.5rem 1.5rem 2rem' }}>
      <S variant="text" width="25%" height={36} sx={{ mb: 2.5 }} />
      {[12, 7, 5, 12, 2, 2].map((count, i) => (
        <Box key={i} sx={{ mb: 1.5 }}>
          <S variant="text" width="35%" height={13} sx={{ mb: 0.75 }} />
          <SkillCardRow count={count} />
        </Box>
      ))}
    </Box>
  );
}

// ─── EXPERIENCE ─────────────────────────────────────────────────────────────
function ExperienceCardSkeleton() {
  return (
    <Box
      sx={{ p: '1.25rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.07)', mb: 1 }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.75 }}>
        <S variant="text" width="45%" height={20} />
        <S variant="rounded" width={120} height={22} sx={{ borderRadius: '12px' }} />
      </Box>
      <S variant="text" width="55%" height={14} sx={{ mb: 1.25 }} />
      <S variant="text" width="100%" height={13} sx={{ mb: 0.5 }} />
      <S variant="text" width="100%" height={13} sx={{ mb: 0.5 }} />
      <S variant="text" width="100%" height={13} sx={{ mb: 0.5 }} />
      <S variant="text" width="70%" height={13} sx={{ mb: 1 }} />
      <PillRow count={5} widths={[70, 80, 65, 75, 60]} />
    </Box>
  );
}

export function ExperienceSkeleton() {
  return (
    <Box sx={{ p: '1.5rem 1.5rem 2rem' }}>
      <S variant="text" width="30%" height={36} sx={{ mb: 2 }} />
      {[1, 2, 3, 4].map((i) => (
        <ExperienceCardSkeleton key={i} />
      ))}
    </Box>
  );
}

// ─── WORK ────────────────────────────────────────────────────────────────────
function WorkCardSkeleton() {
  return (
    <Box sx={{ p: '1.1rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.07)' }}>
      <S variant="text" width="60%" height={20} sx={{ mb: 0.75 }} />
      <S variant="text" width="100%" height={13} sx={{ mb: 0.4 }} />
      <S variant="text" width="100%" height={13} sx={{ mb: 0.4 }} />
      <S variant="text" width="65%" height={13} sx={{ mb: 0.75 }} />
      <PillRow count={3} widths={[70, 85, 60]} />
      <S variant="text" width="50%" height={13} sx={{ mt: 0.75 }} />
    </Box>
  );
}

export function WorkSkeleton() {
  return (
    <Box sx={{ p: '1.5rem 1.5rem 2rem' }}>
      <S variant="text" width="20%" height={36} sx={{ mb: 2 }} />
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <WorkCardSkeleton key={i} />
        ))}
      </Box>
    </Box>
  );
}

// ─── ROUTER ─────────────────────────────────────────────────────────────────
export function SectionSkeleton({ section }: { section: SectionKey }) {
  switch (section) {
    case 'home':
      return <HomeSkeleton />;
    case 'about':
      return <AboutSkeleton />;
    case 'skills':
      return <SkillsSkeleton />;
    case 'experience':
      return <ExperienceSkeleton />;
    case 'work':
      return <WorkSkeleton />;
  }
}
