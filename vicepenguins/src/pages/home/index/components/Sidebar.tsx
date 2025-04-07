import { ChevronRight } from 'lucide-react';

interface SidebarSectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

function SidebarSection({ title, subtitle, children }: SidebarSectionProps) {
  return (
    <div className="mb-4 rounded bg-[#4c5844] p-3">
      <h3 className="mb-2 font-bold">{title}</h3>
      {subtitle && <p className="text-xs text-gray-400 mb-2">{subtitle}</p>}
      {children}
    </div>
  );
}

export function Sidebar() {
  return (
    <div className="col-span-12 md:col-span-3">
      <SidebarSection title="Lorem ipsum" subtitle="Lorem ipsum">
        <>
        </>
      </SidebarSection>
      <SidebarSection title="Lorem ipsum">
        <ul className="space-y-2 text-xs">
          <li className="flex items-center hover:text-white cursor-pointer">
            <ChevronRight className="h-3 w-3" />
            <span>Lorem ipsum</span>
          </li>
          <li className="flex items-center hover:text-white cursor-pointer">
            <ChevronRight className="h-3 w-3" />
            <span>Lorem ipsum</span>
          </li>
          <li className="flex items-center hover:text-white cursor-pointer">
            <ChevronRight className="h-3 w-3" />
            <span>Lorem ipsum</span>
          </li>
        </ul>
      </SidebarSection>
      <SidebarSection title="Lorem ipsum" subtitle="Lorem ipsum">
        <button className="w-full rounded bg-[#4c6b22] px-3 py-1 text-xs text-white hover:bg-[#5c7e10]">
          Lorem ipsum
        </button>
      </SidebarSection>
    </div>
  );
}
