// slider card
"use client"

import SliderCard from "@/lib/ui/useable-components/slider-card";
// hook
// loading skeleton
import SliderSkeleton from "@/lib/ui/useable-components/custom-skeletons/slider.loading.skeleton";

function TopGroceryPicks({ data, loading,error }) {

  // const { error, loading, groceriesData } = useMostOrderedRestaurants(true, 1, 15);

  if (loading) {
    return <SliderSkeleton />;
  }

  if (error) {
    return;
  }

  return <SliderCard heading="toppicks" title="Top-grocery-picks" data={data || []} />;
}

export default TopGroceryPicks;
