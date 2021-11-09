INSERT INTO
    [dbo].[jobsD] (
        [Name],
        [Position],
        [Office],
        [Salary]
    )
VALUES
    (
        @Name,
        @Position,
        @Office,
        @Salary
    )
SELECT
    SCOPE_IDENTITY() AS Id