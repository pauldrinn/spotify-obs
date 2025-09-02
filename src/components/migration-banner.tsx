"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const BANNER_DISMISSED_KEY = "domain-migration-banner-dismissed";

export default function MigrationBanner() {
  const [isDismissed, setIsDismissed] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem(BANNER_DISMISSED_KEY);
    setIsDismissed(dismissed === "true");
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem(BANNER_DISMISSED_KEY, "true");
  };

  if (isDismissed) return null;

  return (
    <div className="relative z-[100] bg-red-600 p-3 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <div className="flex flex-1 items-center gap-3">
          <span className="text-sm font-medium">
            ⚠️ Important: Due to a Spotify trademark notice, the
            &quot;spotify-obs.com&quot; domain will be discontinued.
          </span>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="secondary" size="sm" className="text-xs">
                Learn More
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Domain Migration Notice</DialogTitle>
                <DialogDescription className="space-y-3">
                  <p>
                    Spotify has filed a trademark infringement notice against
                    the &quot;spotify-obs.com&quot; domain. To ensure continued
                    service, we&apos;ve migrated to a new domain.
                  </p>
                  <p className="font-semibold">
                    New domain: obsmusicwidget.vercel.app
                  </p>
                  <p>
                    Please update your OBS browser source URL to use the new
                    domain. The old domain will stop working soon.
                  </p>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
        <button
          onClick={handleDismiss}
          className="text-white transition-colors hover:text-gray-200"
          aria-label="Dismiss banner"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
}
