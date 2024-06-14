import React from 'react';
import { PacmanLoader } from 'react-spinners';
import { COLORS } from '../constant';

export default function Loader({
    loading,
    override
}) {
    return (
        <PacmanLoader
            color={COLORS.SECONDARY}
            loading={loading}
            cssOverride={override}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    )
}