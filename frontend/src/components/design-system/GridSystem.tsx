import React from 'react';
import { Grid, GridItem, Container } from '@/components/layout';

export const GridSystem = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-serif mb-4">Grid System</h2>
      
      <section>
        <h3 className="text-xl font-serif mb-3">Responsive Columns</h3>
        <p className="mb-4 text-text-muted">The grid system automatically adjusts columns based on screen size.</p>
        
        <Container className="mb-8">
          <Grid 
            cols={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 6 }}
            gap={{ xs: 'md', md: 'lg' }}
          >
            {[...Array(12)].map((_, i) => (
              <GridItem key={i}>
                <div className="bg-background-lighter p-md text-center rounded-md border border-primary-blue-500/20">
                  Grid Item {i + 1}
                </div>
              </GridItem>
            ))}
          </Grid>
          <div className="mt-2 text-sm text-text-muted text-center">
            <p>xs: 1 column | sm: 2 columns | md: 3 columns | lg: 4 columns | xl: 6 columns</p>
          </div>
        </Container>
      </section>
      
      <section>
        <h3 className="text-xl font-serif mb-3">Auto-Fit Grid</h3>
        <p className="mb-4 text-text-muted">Automatically fits as many items as possible based on minimum width.</p>
        
        <Container className="mb-8">
          <Grid 
            autoFit={true}
            minColWidth="200px"
            gap={{ xs: 'md' }}
          >
            {[...Array(8)].map((_, i) => (
              <GridItem key={i}>
                <div className="bg-background-lighter p-md text-center rounded-md border border-primary-orange-500/20 h-32 flex items-center justify-center">
                  Auto-Fit Item {i + 1}
                </div>
              </GridItem>
            ))}
          </Grid>
          <div className="mt-2 text-sm text-text-muted text-center">
            <p>Auto-fit grid with minimum column width of 200px</p>
          </div>
        </Container>
      </section>
      
      <section>
        <h3 className="text-xl font-serif mb-3">Spanning Multiple Columns</h3>
        <p className="mb-4 text-text-muted">Grid items can span multiple columns at different breakpoints.</p>
        
        <Container className="mb-8">
          <Grid 
            cols={{ xs: 1, sm: 2, md: 4, lg: 6 }}
            gap={{ xs: 'md' }}
          >
            <GridItem span={{ xs: 1, md: 2, lg: 3 }}>
              <div className="bg-background-lighter p-md text-center rounded-md border border-secondary-teal-500/20">
                Span 1 (xs) → 2 (md) → 3 (lg)
              </div>
            </GridItem>
            <GridItem span={{ xs: 1, md: 2, lg: 3 }}>
              <div className="bg-background-lighter p-md text-center rounded-md border border-secondary-teal-500/20">
                Span 1 (xs) → 2 (md) → 3 (lg)
              </div>
            </GridItem>
            <GridItem span={{ xs: 1, md: 4, lg: 2 }}>
              <div className="bg-background-lighter p-md text-center rounded-md border border-primary-red-500/20">
                Span 1 (xs) → 4 (md) → 2 (lg)
              </div>
            </GridItem>
            <GridItem span={{ xs: 1, md: 2, lg: 2 }}>
              <div className="bg-background-lighter p-md text-center rounded-md border border-primary-blue-500/20">
                Span 1 (xs) → 2 (md) → 2 (lg)
              </div>
            </GridItem>
            <GridItem span={{ xs: 1, md: 2, lg: 2 }}>
              <div className="bg-background-lighter p-md text-center rounded-md border border-primary-blue-500/20">
                Span 1 (xs) → 2 (md) → 2 (lg)
              </div>
            </GridItem>
          </Grid>
        </Container>
      </section>
      
      <section>
        <h3 className="text-xl font-serif mb-3">Complex Layout Example</h3>
        <p className="mb-4 text-text-muted">Creating more complex layouts with specific column placement.</p>
        
        <Container className="mb-8">
          <Grid 
            cols={{ xs: 1, sm: 2, md: 4, lg: 6, xl: 12 }}
            gap={{ xs: 'md' }}
            className="min-h-[300px]"
          >
            <GridItem span={{ xs: 1, md: 2, xl: 4 }} rowSpan={{ md: 2 }}>
              <div className="bg-background-lighter p-md text-center rounded-md border border-primary-blue-500/20 h-full flex items-center justify-center">
                Featured Item
              </div>
            </GridItem>
            <GridItem span={{ xs: 1, md: 2, xl: 4 }}>
              <div className="bg-background-lighter p-md text-center rounded-md border border-primary-orange-500/20">
                Second Item
              </div>
            </GridItem>
            <GridItem span={{ xs: 1, md: 2, xl: 4 }} start={{ md: 3 }}>
              <div className="bg-background-lighter p-md text-center rounded-md border border-primary-red-500/20">
                Third Item
              </div>
            </GridItem>
            <GridItem span={{ xs: 1, md: 4, xl: 8 }} start={{ md: 1, xl: 5 }}>
              <div className="bg-background-lighter p-md text-center rounded-md border border-secondary-teal-500/20">
                Fourth Item (Wide)
              </div>
            </GridItem>
            <GridItem span={{ xs: 1, md: 2, xl: 4 }}>
              <div className="bg-background-lighter p-md text-center rounded-md border border-secondary-green-500/20">
                Fifth Item
              </div>
            </GridItem>
            <GridItem span={{ xs: 1, md: 2, xl: 4 }}>
              <div className="bg-background-lighter p-md text-center rounded-md border border-secondary-green-500/20">
                Sixth Item
              </div>
            </GridItem>
          </Grid>
        </Container>
      </section>
      
      <section>
        <h3 className="text-xl font-serif mb-3">Equal Height Grid</h3>
        <p className="mb-4 text-text-muted">Grid with equal-height rows regardless of content.</p>
        
        <Container className="mb-8">
          <Grid 
            cols={{ xs: 1, md: 3 }}
            gap={{ xs: 'md' }}
            equalHeight={true}
          >
            <GridItem>
              <div className="bg-background-lighter p-md rounded-md border border-primary-blue-500/20 h-full flex flex-col">
                <h4 className="font-serif mb-2">Short Content</h4>
                <p className="text-sm text-text-muted">This has minimal content.</p>
              </div>
            </GridItem>
            <GridItem>
              <div className="bg-background-lighter p-md rounded-md border border-primary-orange-500/20 h-full flex flex-col">
                <h4 className="font-serif mb-2">Medium Content</h4>
                <p className="text-sm text-text-muted">This has a bit more content than the first box.</p>
                <p className="text-sm text-text-muted mt-2">The boxes will all be the same height.</p>
              </div>
            </GridItem>
            <GridItem>
              <div className="bg-background-lighter p-md rounded-md border border-primary-red-500/20 h-full flex flex-col">
                <h4 className="font-serif mb-2">Longer Content</h4>
                <p className="text-sm text-text-muted">This has more content than the other boxes.</p>
                <p className="text-sm text-text-muted mt-2">Yet all three boxes will have the same height due to the equalHeight prop.</p>
                <p className="text-sm text-text-muted mt-2">This creates a more visually balanced layout.</p>
              </div>
            </GridItem>
          </Grid>
        </Container>
      </section>
    </div>
  );
};

export default GridSystem; 