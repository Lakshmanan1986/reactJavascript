import React from 'react';
const ELLIPSIS = '\u2026'; // Please use this in your solution and NOT '...' (three dots)

interface ChipListProps {
    chips?: { label: string }[];
    maxChips?: number;
    maxTextLength?: number;
}

interface ChipProps {
    label: string;
}


export const ChipList = ({ chips, maxChips, maxTextLength }: ChipListProps) => {

    const exampleChip = { label: '123456' };
    const index = 0;


    // Implement your logic here:



    return (
        <section style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <div
                style={{
                    border: '1px solid #bbbbbb',
                    padding: '4px',
                    borderRadius: '8px',
                }}
                data-testid={`chip-${index}`} // use index of each item here
                key={index}
            >
                {exampleChip.label} {/* replace this once you load the chips */}
            </div>

            <aside data-testid="exceeding-text">{0} more items</aside>
        </section>
    );
};

const sampleChips: ChipProps[] = [
    { label: '123456789' },
    { label: '123456' },
    { label: '1234567' },
    { label: '12345678' },
    { label: '12345' },
];

// used in the preview tab, don't remove this
//(you can add and change the parameters to test different cases)

export default function App() {
    return <ChipList maxChips={3} maxTextLength={6} chips={sampleChips} />;
    // return <ChipList maxChips={3} chips={sampleChips} />;
    // return <ChipList />;
    // return <ChipList maxTextLength={6} chips={sampleChips} />;
}

-------------
    import React from 'react';

const ELLIPSIS = '\u2026';

interface ChipListProps {
    chips?: { label: string }[];
    maxChips?: number;
    maxTextLength?: number;
}

interface ChipProps {
    label: string;
}

export const ChipList = ({
    chips,
    maxChips,
    maxTextLength,
}: ChipListProps) => {
    // Default to an empty array when chips are not provided
    const chipList = chips ?? [];

    // Determine how many chips should be displayed
    const visibleCount =
        maxChips !== undefined
            ? Math.max(0, maxChips)
            : chipList.length;

    const visibleChips = chipList.slice(0, visibleCount);

    // Number of hidden chips
    const exceedingCount = Math.max(
        0,
        chipList.length - visibleChips.length
    );

    // Truncate chip text if maxTextLength is provided
    const getLabel = (label: string) => {
        if (
            maxTextLength === undefined ||
            label.length <= maxTextLength
        ) {
            return label;
        }

        // Keep the final text length within maxTextLength
        return (
            label.slice(0, Math.max(0, maxTextLength - 1)) +
            ELLIPSIS
        );
    };

    return (
        <section
            style={{
                display: 'flex',
                gap: '8px',
                alignItems: 'center',
            }}
        >
            {visibleChips.map((chip, index) => (
                <div
                    key={index}
                    style={{
                        border: '1px solid #bbbbbb',
                        padding: '4px',
                        borderRadius: '8px',
                    }}
                    data-testid={`chip-${index}`}
                >
                    {getLabel(chip.label)}
                </div>
            ))}

            {exceedingCount > 0 && (
                <aside data-testid="exceeding-text">
                    {exceedingCount} more items
                </aside>
            )}
        </section>
    );
};

const sampleChips: ChipProps[] = [
    { label: '123456789' },
    { label: '123456' },
    { label: '1234567' },
    { label: '12345678' },
    { label: '12345' },
];

// used in the preview tab, don't remove this
export default function App() {
    return (
        <ChipList
            maxChips={3}
            maxTextLength={6}
            chips={sampleChips}
        />
    );
}