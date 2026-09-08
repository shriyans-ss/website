import { Link, useViewTransitionState } from "react-router-dom";

// A card heading that morphs into the article headline when its post opens.
//
// The shared name is applied only while a transition to this exact post is in
// flight: `view-transition-name` has to be unique across the document, so
// naming every card at once would make the browser discard the group. The hook
// keys off the destination href rather than the clicked element, so the card's
// "Read post" button produces the same morph as the title itself.
export default function PostTitleLink({ to, className = "card-link", children }) {
  const isTransitioning = useViewTransitionState(to);

  return (
    <Link
      to={to}
      viewTransition
      className={className}
      style={isTransitioning ? { viewTransitionName: "post-title" } : undefined}
    >
      {children}
    </Link>
  );
}
