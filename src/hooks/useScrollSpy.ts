import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const useScrollSpy = (sectionIds: string[]) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    let currentHash = location.hash;

    const observer = new IntersectionObserver(
      (entries) => {
        // get visible sections only
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length === 0) return;

        const topSection = visibleSections[0];
        const newHash = `#${topSection.target.id}`;

        if (currentHash !== newHash) {
          currentHash = newHash;

          navigate(
            {
              pathname: location.pathname,
              hash: newHash,
            },
            { replace: true },
          );
        }
      },
      {
        root: null,
        threshold: [0.25, 0.5, 0.75], // more granular detection
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [sectionIds, navigate, location.pathname]);
};
