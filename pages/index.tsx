import {styled} from "@/shared-components/stitches.config";

const Text = styled('p', {
    fontFamily: '$system',
    color: '$hiContrast',

    variants: {
        size: {
            1: {
                fontSize: '$1',
            },
            2: {
                fontSize: '$2',
            },
            3: {
                fontSize: '$3',
            },
        },
    },
});

export default function Home() {
    return (
        <Text as="h1" size="3">
            예리엘 블로그 작업중...
        </Text>
    );
}